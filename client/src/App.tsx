import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { useAuthenticationStatus } from "@nhost/react";
import { nhost } from "@/lib/nhost";
import { Navbar } from "@/components/navbar";
import Landing from "@/pages/landing";
import Login from "@/pages/login";
import Register from "@/pages/register";
import ForgotPassword from "@/pages/forgot-password";
import Profile from "@/pages/profile";
import Dashboard from "@/pages/dashboard";
import WidgetDemo from "@/pages/widget-demo";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";
import { navigate } from "wouter/use-browser-location";
import { Spinner } from "./components/ui/spinner";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />{" "}
      </div>
    );
  }

  if (isAuthenticated) {
    navigate("/", { replace: true });
    return null;
  }

  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      {/* Public routes - only login and register are unprotected */}
      <Route path="/login">
        <PublicRoute>
          <Login />
        </PublicRoute>
      </Route>
      <Route path="/register">
        <PublicRoute>
          <Register />
        </PublicRoute>
      </Route>

      {/* All other routes are protected */}
      <Route path="/">
        <ProtectedRoute>
          <Landing />
        </ProtectedRoute>
      </Route>
      <Route path="/forgot-password">
        <ProtectedRoute>
          <ForgotPassword />
        </ProtectedRoute>
      </Route>
      <Route path="/profile">
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      </Route>
      <Route path="/dashboard">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/widget-demo">
        <ProtectedRoute>
          <WidgetDemo />
        </ProtectedRoute>
      </Route>
      <Route path="/admin">
        <ProtectedRoute>
          <AdminLogin />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/dashboard">
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route>
        <ProtectedRoute>
          <NotFound />
        </ProtectedRoute>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <TooltipProvider>
          <div className="min-h-screen bg-white w-screen h-screen bg-gray-100 relative overflow-hidden">
            <Navbar />
            <Router />
          </div>
          <Toaster />
        </TooltipProvider>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;
