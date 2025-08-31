import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Lock, Mail, Edit, Settings } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useChangePassword, useSendVerificationEmail } from "@nhost/react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "@/graphql/mutations";
import { nhost } from "@/lib/nhost";

const changePasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const updateProfileSchema = z.object({
  displayName: z.string().min(1, "Display name is required"),
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;

export default function Profile() {
  const { user, isLoading: userLoading } = useCurrentUser();
  const {
    changePassword,
    isLoading: passwordLoading,
    isSuccess: passwordSuccess,
    isError: passwordError,
    error: passwordErrorMessage,
  } = useChangePassword();
  const [
    updateUserMutation,
    { loading: profileLoading, error: profileErrorMessage },
  ] = useMutation(UPDATE_USER_MUTATION);
  const {
    sendEmail,
    isLoading: verificationLoading,
    isSent,
    isError: verificationError,
    error: verificationErrorMessage,
  } = useSendVerificationEmail();
  const { toast } = useToast();
  const [isEditingName, setIsEditingName] = useState(false);

  const passwordForm = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const profileForm = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      displayName: user?.displayName || "",
    },
  });

  // Update form when user data loads
  useEffect(() => {
    if (user?.displayName) {
      profileForm.setValue("displayName", user.displayName);
    }
  }, [user?.displayName, profileForm]);

  const onPasswordSubmit = async (data: ChangePasswordFormData) => {
    try {
      await changePassword(data.newPassword);
    } catch (err) {
      // Error handling is done through the hook's isError state
    }
  };

  const onProfileSubmit = async (data: UpdateProfileFormData) => {
    try {
      const result = await updateUserMutation({
        variables: {
          userId: user?.id,
          displayName: data.displayName,
        },
      });

      if (result.data) {
        toast({
          title: "Profile updated successfully",
          description: "Your display name has been updated.",
        });
        setIsEditingName(false);
        await nhost.auth.refreshSession();
      }
    } catch (err) {
      toast({
        title: "Failed to update profile",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSendVerificationEmail = async () => {
    try {
      const res = await sendEmail(user?.email || "");
      // res.isSent && (await nhost.auth.refreshSession());
    } catch (err) {
      console.log("email verification failed ", err);
    }
  };

  // Handle password change success/error
  useEffect(() => {
    if (passwordSuccess) {
      toast({
        title: "Password changed successfully",
        description: "Your password has been updated.",
      });
      passwordForm.reset();
    }
  }, [passwordSuccess, toast, passwordForm]);

  useEffect(() => {
    if (passwordError && passwordErrorMessage) {
      toast({
        title: "Failed to change password",
        description: passwordErrorMessage.message || "Please try again.",
        variant: "destructive",
      });
    }
  }, [passwordError, passwordErrorMessage, toast]);

  // Handle email verification success/error
  useEffect(() => {
    if (isSent) {
      toast({
        title: "Verification email sent",
        description: "Check your email for verification instructions.",
      });
    }
  }, [isSent, toast]);

  useEffect(() => {
    if (verificationError && verificationErrorMessage) {
      toast({
        title: "Failed to send verification email",
        description: verificationErrorMessage.message || "Please try again.",
        variant: "destructive",
      });
    }
  }, [verificationError, verificationErrorMessage, toast]);

  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Profile Settings
            </h1>
            <p className="mt-2 text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Your account details and information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <div className="flex items-center space-x-2 p-3 bg-muted rounded-md">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">
                    {user?.email || "Not available"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Display Name
                </label>
                {isEditingName ? (
                  <Form {...profileForm}>
                    <form
                      onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                      className="space-y-3"
                    >
                      <FormField
                        control={profileForm.control}
                        name="displayName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Enter your display name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="flex space-x-2">
                        <Button
                          type="submit"
                          size="sm"
                          disabled={profileLoading}
                        >
                          {profileLoading ? (
                            <>
                              <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                              Saving...
                            </>
                          ) : (
                            "Save"
                          )}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setIsEditingName(false);
                            profileForm.setValue(
                              "displayName",
                              user?.displayName || ""
                            );
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">
                        {user?.displayName || user?.email || "Not set"}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsEditingName(true)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              {/* 
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Account Created
                </label>
                <div className="p-3 bg-slate-50 rounded-md">
                  <span className="text-slate-900">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "Not available"}
                  </span>
                </div>
              </div> */}
            </CardContent>
          </Card>

          {/* Change Password */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Change Password
              </CardTitle>
              <CardDescription>
                Update your password to keep your account secure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...passwordForm}>
                <form
                  onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            placeholder="Enter new password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <PasswordInput
                            placeholder="Confirm new password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={passwordLoading}
                  >
                    {passwordLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Changing Password...
                      </>
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Settings */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription>
              Additional security settings and information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-muted rounded-lg space-y-3 sm:space-y-0">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">
                    Email Verification
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your email address is{" "}
                    {user?.emailVerified ? "verified" : "not verified"}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  {user?.emailVerified ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">
                      Verified
                    </span>
                  ) : (
                    <>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400">
                        Unverified
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSendVerificationEmail}
                        disabled={verificationLoading}
                        className="w-full sm:w-auto"
                      >
                        {verificationLoading ? (
                          <>
                            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Mail className="mr-1 h-3 w-3" />
                            <span className="sm:hidden">Send Verification</span>
                            <span className="hidden sm:inline">
                              Send Verification Email
                            </span>
                          </>
                        )}
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-slate-900">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-slate-600">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline" disabled>
                  Coming Soon
                </Button>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
