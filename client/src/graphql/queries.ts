import { gql } from '@apollo/client';

// User and Client queries
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    users(limit: 1) {
      id
      email
      displayName
      isAnonymous
      disabled
      createdAt
      lastSeen
    }
  }
`;

export const GET_USER_CLIENT = gql`
  query GetUserClient($userId: uuid!) {
    clients(where: {user_id: {_eq: $userId}}) {
      id
      app_id
      public_key
      website_url
      allowed_domains
      widget_position
      widget_theme
      is_active
      monthly_try_on_limit
      monthly_try_on_count
      last_reset_date
      require_referrer_check
      max_requests_per_minute
      created_at
      updated_at
    }
  }
`;

// Analytics queries
export const GET_CLIENT_ANALYTICS = gql`
  query GetClientAnalytics($clientId: Int!) {
    analytics_aggregate(where: {client_id: {_eq: $clientId}}) {
      aggregate {
        count
      }
    }
    analytics(where: {client_id: {_eq: $clientId}, event_type: {_eq: "view"}}) {
      id
    }
    analytics(where: {client_id: {_eq: $clientId}, event_type: {_eq: "try_on"}}) {
      id
    }
    analytics(where: {client_id: {_eq: $clientId}, event_type: {_eq: "conversion"}}) {
      id
    }
  }
`;

export const GET_CLIENT_ANALYTICS_SUMMARY = gql`
  query GetClientAnalyticsSummary($clientId: Int!) {
    total_views: analytics_aggregate(where: {client_id: {_eq: $clientId}, event_type: {_eq: "view"}}) {
      aggregate {
        count
      }
    }
    try_ons: analytics_aggregate(where: {client_id: {_eq: $clientId}, event_type: {_eq: "try_on"}}) {
      aggregate {
        count
      }
    }
    conversions: analytics_aggregate(where: {client_id: {_eq: $clientId}, event_type: {_eq: "conversion"}}) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_TRY_ON_SESSIONS = gql`
  query GetTryOnSessions($clientId: Int!) {
    try_on_sessions(where: {client_id: {_eq: $clientId}}, order_by: {created_at: desc}) {
      id
      status
      origin_domain
      created_at
    }
    try_on_sessions_aggregate(where: {client_id: {_eq: $clientId}}) {
      aggregate {
        count
      }
    }
  }
`;

// Admin queries
export const GET_ALL_CLIENTS = gql`
  query GetAllClients {
    clients(order_by: {created_at: desc}) {
      id
      app_id
      website_url
      is_active
      monthly_try_on_count
      monthly_try_on_limit
      created_at
      user {
        id
        email
        displayName
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users(order_by: {createdAt: desc}) {
      id
      email
      displayName
      isAnonymous
      disabled
      createdAt
      lastSeen
    }
  }
`;