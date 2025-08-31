import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, Shield } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiRequest("POST", "/api/admin/login", {
        email,
        password,
      });
      const data = await response.json();

      toast({
        title: "Admin access granted",
        description: "Welcome to the admin dashboard.",
      });
      setLocation("/admin/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid admin credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-background dark:via-muted/20 dark:to-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-destructive to-orange-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white dark:text-foreground">
              Admin Portal
            </h1>
          </div>
          <h2 className="text-3xl font-bold text-white dark:text-foreground">
            Admin Access
          </h2>
          <p className="mt-2 text-sm text-slate-300 dark:text-muted-foreground">
            Sign in to manage users and widgets
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 dark:bg-card/50 dark:border-border backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white dark:text-foreground">
              Admin Login
            </CardTitle>
            <CardDescription className="text-slate-300 dark:text-muted-foreground">
              Enter your admin credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-white dark:text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 dark:bg-background dark:border-border dark:text-foreground"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-white dark:text-foreground"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 dark:bg-background dark:border-border dark:text-foreground"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In as Admin"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
