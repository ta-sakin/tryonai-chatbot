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
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { user, isAuthenticated } = useCurrentUser();
  const { signOut: logout } = useSignOut();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                TryOn AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button
                    variant="ghost"
                    className={`hover:text-primary hover:bg-transparent ${
                      location === "/dashboard"
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link href="/widget-demo">
                  <Button
                    variant="ghost"
                    className={`hover:text-primary hover:bg-transparent ${
                      location === "/widget-demo"
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    Widget Demo
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="ghost"
                    className={`hover:text-primary hover:bg-transparent ${
                      location === "/pricing"
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    Pricing
                  </Button>
                </Link>
                {/* <ThemeToggle /> */}
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
                        <AvatarFallback>
                          {user?.displayName?.charAt(0).toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <Link href="/profile">
                      <DropdownMenuItem className="font-normal cursor-pointer focus:[&_p:last-child]:text-primary-foreground/80">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {user?.displayName}
                          </p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                          </p>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
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
                <Link href="/pricing">
                  <Button
                    variant="ghost"
                    className={`hover:text-primary hover:bg-transparent ${
                      location === "/pricing"
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    Pricing
                  </Button>
                </Link>
                {/* <ThemeToggle /> */}
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="hover:text-primary hover:bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="h-9 w-9 hover:text-primary hover:bg-transparent"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 pt-4 pb-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start h-11 hover:text-primary hover:bg-transparent ${
                        location === "/dashboard"
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/widget-demo">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start h-11 hover:text-primary hover:bg-transparent ${
                        location === "/widget-demo"
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Widget Demo
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start h-11 hover:text-primary hover:bg-transparent ${
                        location === "/pricing"
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/profile">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start h-11 hover:text-primary hover:bg-transparent ${
                        location === "/profile"
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-11 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/pricing">
                    <Button
                      variant="ghost"
                      className={`w-full justify-start h-11 hover:text-primary hover:bg-transparent ${
                        location === "/pricing"
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Pricing
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-11 hover:text-primary hover:bg-transparent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      className="w-full justify-start h-11"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
