import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useSignOut } from "@nhost/react";
import { getAvatarUrl } from "@/lib/utils";

export function Navbar() {
  const { user, isAuthenticated } = useCurrentUser();
  const { signOut: logout } = useSignOut();
  const [location] = useLocation();

  console.log(user, { isAuthenticated });
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <i className="fas fa-magic text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold text-slate-800">TryOn AI</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className={`text-slate-600 hover:text-primary transition-colors ${
                    location === "/dashboard" ? "text-primary font-medium" : ""
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/widget-demo"
                  className={`text-slate-600 hover:text-primary transition-colors ${
                    location === "/widget-demo"
                      ? "text-primary font-medium"
                      : ""
                  }`}
                >
                  Widget Demo
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={getAvatarUrl(user?.avatarUrl)}
                          alt={user?.displayName}
                        />

                        <AvatarFallback className="text-black">
                          {user?.displayName?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <Link href="/profile">
                      <DropdownMenuItem className="font-normal cursor-pointer">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user?.displayName}
                          </p>
                          <p className="text-xs leading-none">{user?.email}</p>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                    {/* <Link href="/profile">
                      <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                    </Link> */}
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleLogout}
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
