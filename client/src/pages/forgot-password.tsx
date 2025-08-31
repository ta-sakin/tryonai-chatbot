import { Link } from "wouter";
import { useState } from "react";
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
import {
  Loader2,
  ArrowLeft,
  Mail,
  Shield,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useResetPassword } from "@nhost/react";

export default function ForgotPassword() {
  const { resetPassword, isLoading } = useResetPassword();
  const { toast } = useToast();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    try {
      const res = await resetPassword(email, {
        redirectTo: `${window.location.origin}/profile`,
      });

      if (res.isError) {
        toast({
          title: "Failed to send reset email",
          description:
            res.error?.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
        return;
      }

      setEmailSent(true);
      toast({
        title: "Reset email sent!",
        description: "Check your email for password reset instructions.",
      });
    } catch (error) {
      console.error("Reset password error:", error);
      toast({
        title: "Reset failed",
        description: "Unable to send reset email. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">TryOn AI</h1>
            </div>
            <h2 className="text-3xl font-bold">Check your email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We've sent password reset instructions to your email address
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Email sent successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    If an account with that email exists, you'll receive an
                    email with instructions to reset your password.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-sm font-medium">Security tip</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Didn't receive an email? Check your spam folder or try
                        again with a different email address.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    onClick={() => setEmailSent(false)}
                    className="w-full"
                  >
                    Try different email
                  </Button>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to login
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">TryOn AI</h1>
          </div>
          <h2 className="text-3xl font-bold">Forgot password?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your email address and we'll send you instructions to reset
            your password
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              We'll send you a secure link to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    We'll only send a reset link if an account exists with this
                    email address.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending reset link...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send reset email
                  </>
                )}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center transition-colors"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
