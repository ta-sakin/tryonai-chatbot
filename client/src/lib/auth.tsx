// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { apiRequest } from "./queryClient";

// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// interface Client {
//   id: number;
//   userId: number;
//   appId: string;
//   websiteUrl: string | null;
//   widgetPosition: string;
//   widgetTheme: string;
//   isActive: boolean;
// }

// interface AuthContextType {
//   user: User | null;
//   client: Client | null;
//   login: (email: string, password: string) => Promise<void>;
//   register: (
//     username: string,
//     email: string,
//     password: string
//   ) => Promise<void>;
//   logout: () => Promise<void>;
//   isLoading: boolean;
//   isAuthenticated: boolean;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [client, setClient] = useState<Client | null>(null);
//   const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
//   const [lastActivity, setLastActivity] = useState<number>(Date.now());
//   const queryClient = useQueryClient();

//   // Check authentication status
//   const { data, isLoading, error, refetch } = useQuery({
//     queryKey: ["/api/auth/me"],
//     enabled: true,
//     retry: (failureCount, error) => {
//       // Don't retry on 401 errors (unauthorized)
//       if (error.message.includes("401:")) {
//         return false;
//       }
//       return failureCount < 2;
//     },
//     refetchOnWindowFocus: false,
//     refetchOnMount: true,
//     staleTime: 5 * 60 * 1000, // 5 minutes
//     gcTime: 10 * 60 * 1000, // 10 minutes
//     refetchInterval: false, // We'll handle refresh manually
//   });

//   // Session refresh mutation
//   const refreshMutation = useMutation({
//     mutationFn: async () => {
//       const response = await apiRequest("POST", "/api/auth/refresh");
//       return response.json();
//     },
//     onSuccess: (data) => {
//       setUser(data.user);
//       setClient(data.client);
//       setLastActivity(Date.now());
//       queryClient.setQueryData(["/api/auth/me"], data);
//       console.log("Session refreshed successfully");
//     },
//     onError: (error) => {
//       console.error("Session refresh failed:", error);
//       // If refresh fails, clear user state and redirect to login
//       handleLogout();
//     },
//   });

//   // Auto-refresh session based on activity
//   useEffect(() => {
//     if (!user || !hasCheckedAuth) return;

//     const refreshInterval = setInterval(() => {
//       const now = Date.now();
//       const timeSinceLastActivity = now - lastActivity;

//       // If user has been active in the last 30 minutes, refresh the session
//       if (timeSinceLastActivity < 30 * 60 * 1000) {
//         console.log("Auto-refreshing session due to recent activity");
//         refreshMutation.mutate();
//       }
//     }, 20 * 60 * 1000); // Check every 20 minutes

//     return () => clearInterval(refreshInterval);
//   }, [user, hasCheckedAuth, lastActivity, refreshMutation]);

//   // Track user activity
//   useEffect(() => {
//     if (!user) return;

//     const updateActivity = () => {
//       setLastActivity(Date.now());
//     };

//     // Track various user activities
//     const events = [
//       "mousedown",
//       "mousemove",
//       "keypress",
//       "scroll",
//       "touchstart",
//       "click",
//     ];

//     events.forEach((event) => {
//       document.addEventListener(event, updateActivity, { passive: true });
//     });

//     return () => {
//       events.forEach((event) => {
//         document.removeEventListener(event, updateActivity);
//       });
//     };
//   }, [user]);

//   // Handle visibility change to refresh session when user returns
//   useEffect(() => {
//     if (!user) return;

//     const handleVisibilityChange = () => {
//       if (!document.hidden && user && hasCheckedAuth) {
//         const now = Date.now();
//         const timeSinceLastActivity = now - lastActivity;

//         // If it's been more than 5 minutes since last activity, refresh session
//         if (timeSinceLastActivity > 5 * 60 * 1000) {
//           console.log("Refreshing session after page became visible");
//           refreshMutation.mutate();
//         }
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () =>
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//   }, [user, hasCheckedAuth, lastActivity, refreshMutation]);

//   // Handle initial auth check
//   useEffect(() => {
//     if (!isLoading) {
//       setHasCheckedAuth(true);

//       if (data && !error) {
//         setUser(data.user);
//         setClient(data.client);
//         setLastActivity(Date.now());
//       } else {
//         // Clear user state if no data or error
//         setUser(null);
//         setClient(null);
//       }
//     }
//   }, [data, isLoading, error]);

//   // Periodic session validation
//   useEffect(() => {
//     if (!user || !hasCheckedAuth) return;

//     const validateSession = async () => {
//       try {
//         await refetch();
//       } catch (error) {
//         console.error("Session validation failed:", error);
//         handleLogout();
//       }
//     };

//     // Validate session every 15 minutes
//     const validationInterval = setInterval(validateSession, 15 * 60 * 1000);

//     return () => clearInterval(validationInterval);
//   }, [user, hasCheckedAuth, refetch]);

//   const handleLogout = () => {
//     setUser(null);
//     setClient(null);
//     setLastActivity(Date.now());
//     queryClient.clear();
//     setHasCheckedAuth(false);
//   };

//   const loginMutation = useMutation({
//     mutationFn: async ({
//       email,
//       password,
//     }: {
//       email: string;
//       password: string;
//     }) => {
//       const response = await apiRequest("POST", "/api/auth/login", {
//         email,
//         password,
//       });
//       return response.json();
//     },
//     onSuccess: (data) => {
//       setUser(data.user);
//       setClient(data.client);
//       setLastActivity(Date.now());
//       queryClient.setQueryData(["/api/auth/me"], data);
//     },
//   });

//   const registerMutation = useMutation({
//     mutationFn: async ({
//       username,
//       email,
//       password,
//     }: {
//       username: string;
//       email: string;
//       password: string;
//     }) => {
//       const response = await apiRequest("POST", "/api/auth/register", {
//         username,
//         email,
//         password,
//       });
//       return response.json();
//     },
//     onSuccess: (data) => {
//       setUser(data.user);
//       setClient(data.client);
//       setLastActivity(Date.now());
//       queryClient.setQueryData(["/api/auth/me"], data);
//     },
//   });

//   const logoutMutation = useMutation({
//     mutationFn: async () => {
//       await apiRequest("POST", "/api/auth/logout");
//     },
//     onSuccess: () => {
//       handleLogout();
//     },
//     onError: () => {
//       // Even if logout fails on server, clear local state
//       handleLogout();
//     },
//   });

//   const login = async (email: string, password: string) => {
//     await loginMutation.mutateAsync({ email, password });
//   };

//   const register = async (
//     username: string,
//     email: string,
//     password: string
//   ) => {
//     await registerMutation.mutateAsync({ username, email, password });
//   };

//   const logout = async () => {
//     await logoutMutation.mutateAsync();
//   };

//   const value: AuthContextType = {
//     user,
//     client,
//     login,
//     register,
//     logout,
//     isLoading:
//       isLoading || loginMutation.isPending || registerMutation.isPending,
//     isAuthenticated: !!user,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
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
  register: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  const queryClient = useQueryClient();

  // Check authentication status
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/auth/me"],
    enabled: true,
    retry: (failureCount, error) => {
      // Don't retry on 401 errors (unauthorized)
      if (error.message.includes("401:")) {
        return false;
      }
      return failureCount < 2;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: false, // We'll handle refresh manually
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
      setLastActivity(Date.now());
      queryClient.setQueryData(["/api/auth/me"], data);
      console.log("Session refreshed successfully");
    },
    onError: (error) => {
      console.error("Session refresh failed:", error);
      // If refresh fails, clear user state and redirect to login
      handleLogout();
    },
  });

  // Auto-refresh session based on activity
  useEffect(() => {
    if (!user || !hasCheckedAuth) return;

    const refreshInterval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivity;

      // If user has been active in the last 30 minutes, refresh the session
      if (timeSinceLastActivity < 30 * 60 * 1000) {
        console.log("Auto-refreshing session due to recent activity");
        refreshMutation.mutate();
      }
    }, 20 * 60 * 1000); // Check every 20 minutes

    return () => clearInterval(refreshInterval);
  }, [user, hasCheckedAuth, lastActivity, refreshMutation]);

  // Track user activity
  useEffect(() => {
    if (!user) return;

    const updateActivity = () => {
      setLastActivity(Date.now());
    };

    // Track various user activities
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      document.addEventListener(event, updateActivity, { passive: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, updateActivity);
      });
    };
  }, [user]);

  // Handle visibility change to refresh session when user returns
  useEffect(() => {
    if (!user) return;

    const handleVisibilityChange = () => {
      if (!document.hidden && user && hasCheckedAuth) {
        const now = Date.now();
        const timeSinceLastActivity = now - lastActivity;

        // If it's been more than 5 minutes since last activity, refresh session
        if (timeSinceLastActivity > 5 * 60 * 1000) {
          console.log("Refreshing session after page became visible");
          refreshMutation.mutate();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [user, hasCheckedAuth, lastActivity, refreshMutation]);

  // Handle initial auth check
  useEffect(() => {
    if (!isLoading) {
      setHasCheckedAuth(true);

      if (data && !error) {
        setUser(data.user);
        setClient(data.client);
        setLastActivity(Date.now());
      } else {
        // Clear user state if no data or error
        setUser(null);
        setClient(null);
      }
    }
  }, [data, isLoading, error]);

  // Periodic session validation
  useEffect(() => {
    if (!user || !hasCheckedAuth) return;

    const validateSession = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error("Session validation failed:", error);
        handleLogout();
      }
    };

    // Validate session every 15 minutes
    const validationInterval = setInterval(validateSession, 15 * 60 * 1000);

    return () => clearInterval(validationInterval);
  }, [user, hasCheckedAuth, refetch]);

  const handleLogout = () => {
    setUser(null);
    setClient(null);
    setLastActivity(Date.now());
    queryClient.clear();
    setHasCheckedAuth(false);
  };

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await apiRequest("POST", "/api/auth/login", {
        email,
        password,
      });
      return response.json();
    },
    onSuccess: (data) => {
      setUser(data.user);
      setClient(data.client);
      setLastActivity(Date.now());
      queryClient.setQueryData(["/api/auth/me"], data);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => {
      const response = await apiRequest("POST", "/api/auth/register", {
        username,
        email,
        password,
      });
      return response.json();
    },
    onSuccess: (data) => {
      setUser(data.user);
      setClient(data.client);
      setLastActivity(Date.now());
      queryClient.setQueryData(["/api/auth/me"], data);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      handleLogout();
    },
    onError: () => {
      // Even if logout fails on server, clear local state
      handleLogout();
    },
  });

  const login = async (email: string, password: string) => {
    await loginMutation.mutateAsync({ email, password });
  };

  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
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
    isLoading:
      isLoading || loginMutation.isPending || registerMutation.isPending,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
