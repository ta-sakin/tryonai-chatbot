import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "./queryClient";

interface User {
  id: number;
  username: string;
  email: string;
}

interface Client {
  id: number;
  userId: number;
  appId: string;
  websiteUrl: string | null;
  widgetPosition: string;
  widgetTheme: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  client: Client | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["/api/auth/me"],
    enabled: true,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
    refetchInterval: false, // Disable automatic refetching
  });

  // Session refresh mutation
  const refreshMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/auth/refresh");
      return response.json();
    },
    onSuccess: (data) => {
      setUser(data.user);
      setClient(data.client);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
    onError: (error) => {
      console.error("Session refresh failed:", error);
      // If refresh fails, clear user state
      setUser(null);
      setClient(null);
      queryClient.removeQueries({ queryKey: ["/api/auth/me"] });
    },
  });

  // Auto-refresh session periodically when user is authenticated
  useEffect(() => {
    if (user && hasCheckedAuth) {
      // Refresh session every 20 minutes
      const refreshInterval = setInterval(() => {
        refreshMutation.mutate();
      }, 20 * 60 * 1000);

      return () => clearInterval(refreshInterval);
    }
  }, [user, hasCheckedAuth, refreshMutation]);

  // Handle visibility change to refresh session when user returns
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user && hasCheckedAuth) {
        // Only refresh if it's been more than 5 minutes since last check
        const lastQueryTime = queryClient.getQueryState(["/api/auth/me"])?.dataUpdatedAt || 0;
        const timeSinceLastCheck = Date.now() - lastQueryTime;
        
        if (timeSinceLastCheck > 5 * 60 * 1000) {
          refreshMutation.mutate();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [user, hasCheckedAuth, queryClient, refreshMutation]);

  useEffect(() => {
    if (!isLoading) {
      setHasCheckedAuth(true);
      
      if (data) {
        setUser(data.user);
        setClient(data.client);
      } else {
        // Clear user state if no data (likely 401 or not authenticated)
        setUser(null);
        setClient(null);
      }
    }
  }, [data, isLoading]);

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      console.log("Starting login mutation for:", email);
      const response = await apiRequest("POST", "/api/auth/login", { email, password });
      const data = await response.json();
      console.log("Login response received:", data);
      return data;
    },
    onSuccess: (data) => {
      console.log("Login mutation successful:", data);
      setUser(data.user);
      setClient(data.client);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
    onError: (error) => {
      console.error("Login mutation failed:", error);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({ username, email, password }: { username: string; email: string; password: string }) => {
      console.log("Starting registration mutation for:", email);
      const response = await apiRequest("POST", "/api/auth/register", { username, email, password });
      const data = await response.json();
      console.log("Registration response received:", data);
      return data;
    },
    onSuccess: (data) => {
      console.log("Registration mutation successful:", data);
      setUser(data.user);
      setClient(data.client);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
    onError: (error) => {
      console.error("Registration mutation failed:", error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      setUser(null);
      setClient(null);
      queryClient.clear();
      setHasCheckedAuth(false);
    },
  });

  const login = async (email: string, password: string) => {
    console.log("Login function called for:", email);
    await loginMutation.mutateAsync({ email, password });
  };

  const register = async (username: string, email: string, password: string) => {
    console.log("Register function called for:", email);
    await registerMutation.mutateAsync({ username, email, password });
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const value: AuthContextType = {
    user,
    client,
    login,
    register,
    logout,
    isLoading: isLoading || loginMutation.isPending || registerMutation.isPending,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}