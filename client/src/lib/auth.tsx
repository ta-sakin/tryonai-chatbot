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
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["/api/auth/me"],
    enabled: true,
    retry: false,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes to keep session alive
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

  // Auto-refresh session before it expires
  useEffect(() => {
    if (user) {
      // Refresh session every 25 minutes (before 30-minute server timeout)
      const refreshInterval = setInterval(() => {
        refreshMutation.mutate();
      }, 25 * 60 * 1000);

      return () => clearInterval(refreshInterval);
    }
  }, [user, refreshMutation]);

  // Handle visibility change to refresh session when user returns
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user) {
        // Refresh session when user returns to tab
        queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [user, queryClient]);

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setClient(data.client);
    } else if (error && error.message.includes('401:')) {
      // Clear user state on 401 errors
      setUser(null);
      setClient(null);
    }
  }, [data, error]);

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const response = await apiRequest("POST", "/api/auth/login", { email, password });
      return response.json();
    },
    onSuccess: (data) => {
      setUser(data.user);
      setClient(data.client);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({ username, email, password }: { username: string; email: string; password: string }) => {
      const response = await apiRequest("POST", "/api/auth/register", { username, email, password });
      return response.json();
    },
    onSuccess: (data) => {
      setUser(data.user);
      setClient(data.client);
      queryClient.setQueryData(["/api/auth/me"], data);
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
    },
  });

  const login = async (email: string, password: string) => {
    await loginMutation.mutateAsync({ email, password });
  };

  const register = async (username: string, email: string, password: string) => {
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