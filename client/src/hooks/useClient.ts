import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserId } from "@nhost/react";
import { useApolloClient } from "@apollo/client";
import { GET_USER_CLIENT } from "@/graphql/queries";
import {
  CREATE_CLIENT,
  REGENERATE_CLIENT_KEYS,
  UPDATE_CLIENT,
} from "@/graphql/mutations";

export function useClient() {
  const userId = useUserId();
  const apolloClient = useApolloClient();
  const queryClient = useQueryClient();

  const {
    data: clientData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["client", userId],
    queryFn: async () => {
      if (!userId) return null;

      const { data } = await apolloClient.query({
        query: GET_USER_CLIENT,
        variables: { userId },
      });

      return data?.clients?.[0] || null;
    },
    enabled: !!userId,
  });

  const createClientMutation = useMutation({
    mutationFn: async (clientData: any) => {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_CLIENT,
        variables: { object: clientData },
      });
      return data.insert_clients_one;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client", userId] });
    },
  });

  const updateClientMutation = useMutation({
    mutationFn: async ({ id, changes }: { id: number; changes: any }) => {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_CLIENT,
        variables: { id, changes },
      });
      return data.update_clients_by_pk;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client", userId] });
    },
  });

  const regenerateKeysMutation = useMutation({
    mutationFn: async (id: number) => {
      // Generate new keys
      const secretKey = crypto.randomUUID() + crypto.randomUUID();
      const publicKey = crypto.randomUUID().replace(/-/g, "").substring(0, 16);

      const { data } = await apolloClient.mutate({
        mutation: REGENERATE_CLIENT_KEYS,
        variables: { id, secretKey, publicKey },
      });
      return data.update_clients_by_pk;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client", userId] });
    },
  });

  return {
    client: clientData,
    isLoading,
    error,
    createClient: createClientMutation.mutate,
    updateClient: updateClientMutation.mutate,
    regenerateKeys: regenerateKeysMutation.mutate,
    isCreating: createClientMutation.isPending,
    isUpdating: updateClientMutation.isPending,
    isRegenerating: regenerateKeysMutation.isPending,
  };
}
