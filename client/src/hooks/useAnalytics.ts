import { useQuery } from '@tanstack/react-query';
import { useApolloClient } from '@apollo/client';
import { GET_CLIENT_ANALYTICS, GET_TRY_ON_SESSIONS } from '@/graphql/operations';

export function useAnalytics(clientId?: number) {
  const apolloClient = useApolloClient();

  const { data: analyticsData, isLoading: analyticsLoading } = useQuery({
    queryKey: ['analytics', clientId],
    queryFn: async () => {
      if (!clientId) return null;
      
      const { data } = await apolloClient.query({
        query: GET_CLIENT_ANALYTICS,
        variables: { clientId },
        fetchPolicy: 'cache-and-network'
      });
      
      return {
        analytics: data.analytics || [],
        totalEvents: data.analytics_aggregate?.aggregate?.count || 0
      };
    },
    enabled: !!clientId,
  });

  const { data: sessionsData, isLoading: sessionsLoading } = useQuery({
    queryKey: ['try-on-sessions', clientId],
    queryFn: async () => {
      if (!clientId) return null;
      
      const { data } = await apolloClient.query({
        query: GET_TRY_ON_SESSIONS,
        variables: { clientId },
        fetchPolicy: 'cache-and-network'
      });
      
      return {
        sessions: data.try_on_sessions || [],
        totalSessions: data.try_on_sessions_aggregate?.aggregate?.count || 0
      };
    },
    enabled: !!clientId,
  });

  const analytics = analyticsData?.analytics || [];
  const sessions = sessionsData?.sessions || [];

  // Calculate stats
  const views = analytics.filter(a => a.event_type === 'view').length;
  const tryOns = sessionsData?.totalSessions || 0;
  const conversions = analytics.filter(a => a.event_type === 'conversion').length;
  const conversionRate = tryOns > 0 ? ((conversions / tryOns) * 100).toFixed(1) : '0';

  return {
    analytics,
    sessions,
    stats: {
      totalViews: views,
      tryOns,
      conversions,
      conversionRate,
    },
    isLoading: analyticsLoading || sessionsLoading,
  };
}