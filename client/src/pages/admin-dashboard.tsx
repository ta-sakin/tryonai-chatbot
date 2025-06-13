import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  Users, 
  Blocks, 
  Activity, 
  TrendingUp, 
  Shield, 
  Eye, 
  ToggleLeft, 
  ToggleRight,
  AlertCircle
} from "lucide-react";

interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalWidgets: number;
  activeWidgets: number;
}

interface AdminUser {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  createdAt: string;
}

interface AdminClient {
  id: number;
  userId: number;
  appId: string;
  username: string;
  email: string;
  websiteUrl: string | null;
  isActive: boolean;
  monthlyTryOnCount: number;
  monthlyTryOnLimit: number;
  createdAt: string;
}

export default function AdminDashboard() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: dashboardData, isLoading } = useQuery({
    queryKey: ["/api/admin/dashboard"],
    retry: false,
  });

  const { data: users } = useQuery({
    queryKey: ["/api/admin/users"],
    retry: false,
  });

  const toggleUserMutation = useMutation({
    mutationFn: async (userId: number) => {
      const response = await apiRequest("PUT", `/api/admin/users/${userId}/toggle`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "User status updated",
        description: "User has been enabled/disabled successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const toggleClientMutation = useMutation({
    mutationFn: async (clientId: number) => {
      const response = await apiRequest("PUT", `/api/admin/clients/${clientId}/toggle`);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/users"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/dashboard"] });
      toast({
        title: "Widget status updated",
        description: "Widget has been enabled/disabled successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Update failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
      </div>
    );
  }

  const stats: AdminStats = dashboardData?.stats || { totalUsers: 0, activeUsers: 0, totalWidgets: 0, activeWidgets: 0 };
  const recentUsers: AdminUser[] = users || [];
  const recentClients: AdminClient[] = dashboardData?.clients || [];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-red-500" />
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-slate-300 mt-1">Manage users and widgets across the platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-300">Total Users</p>
                  <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Activity className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-300">Active Users</p>
                  <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Blocks className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-300">Total Widgets</p>
                  <p className="text-2xl font-bold text-white">{stats.totalWidgets}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-300">Active Widgets</p>
                  <p className="text-2xl font-bold text-white">{stats.activeWidgets}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Users Management */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Users Management</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="text-white font-medium">{user.username}</p>
                          <p className="text-slate-300 text-sm">{user.email}</p>
                        </div>
                        {user.isAdmin && (
                          <Badge variant="secondary" className="bg-red-600 text-white">
                            Admin
                          </Badge>
                        )}
                      </div>
                      <p className="text-slate-400 text-xs mt-1">
                        Joined {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.isActive ? "default" : "secondary"}>
                        {user.isActive ? "Active" : "Disabled"}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleUserMutation.mutate(user.id)}
                        disabled={toggleUserMutation.isPending || user.isAdmin}
                        className="text-slate-300 hover:text-white"
                      >
                        {user.isActive ? (
                          <ToggleRight className="h-4 w-4" />
                        ) : (
                          <ToggleLeft className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Widgets Management */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Blocks className="h-5 w-5" />
                <span>Widgets Management</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Monitor and control widget installations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClients.map((client) => (
                  <div key={client.id} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div>
                          <p className="text-white font-medium">{client.username}</p>
                          <p className="text-slate-300 text-sm">{client.email}</p>
                          <p className="text-slate-400 text-xs">App ID: {client.appId}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center space-x-4 text-xs text-slate-400">
                        <span>Usage: {client.monthlyTryOnCount}/{client.monthlyTryOnLimit}</span>
                        {client.websiteUrl && (
                          <span>Site: {client.websiteUrl}</span>
                        )}
                      </div>
                      {client.monthlyTryOnCount >= client.monthlyTryOnLimit && (
                        <div className="mt-2 flex items-center space-x-1 text-xs text-yellow-400">
                          <AlertCircle className="h-3 w-3" />
                          <span>Limit reached</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={client.isActive ? "default" : "secondary"}>
                        {client.isActive ? "Active" : "Disabled"}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleClientMutation.mutate(client.id)}
                        disabled={toggleClientMutation.isPending}
                        className="text-slate-300 hover:text-white"
                      >
                        {client.isActive ? (
                          <ToggleRight className="h-4 w-4" />
                        ) : (
                          <ToggleLeft className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}