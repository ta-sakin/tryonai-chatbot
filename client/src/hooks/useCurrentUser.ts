import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER, GET_USER_CLIENT } from "@/graphql/queries";
import { nhost } from "@/lib/nhost";
import { useAuthenticationStatus, useUserData, User } from "@nhost/react";

export interface Client {
  id: number;
  app_id: string;
  public_key: string;
  website_url?: string;
  allowed_domains: string[];
  widget_position: string;
  widget_theme: string;
  is_active: boolean;
  monthly_try_on_limit: number;
  monthly_try_on_count: number;
  last_reset_date?: string;
  require_referrer_check: boolean;
  max_requests_per_minute: number;
  created_at: string;
  updated_at: string;
}

export function useCurrentUser() {
  const { isLoading, isAuthenticated } = useAuthenticationStatus();
  const user = useUserData();

  const {
    data: clientData,
    loading: clientLoading,
    error: clientError,
    refetch: refetchClient,
  } = useQuery(GET_USER_CLIENT, {
    variables: { userId: user?.id },
    skip: !user?.id,
  });

  const client = clientData?.clients?.[0] as Client | undefined;

  return {
    user,
    client,
    isLoading: isLoading || clientLoading,
    error: clientError,
    isAuthenticated,
    refetchClient,
  };
}
