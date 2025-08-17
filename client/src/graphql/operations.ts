// import { gql } from '@apollo/client';

// // Client operations
// export const GET_USER_CLIENT = gql`
//   query GetUserClient($userId: uuid!) {
//     clients(where: {user_id: {_eq: $userId}}) {
//       id
//       app_id
//       public_key
//       website_url
//       allowed_domains
//       widget_position
//       widget_theme
//       is_active
//       monthly_try_on_limit
//       monthly_try_on_count
//       last_reset_date
//       require_referrer_check
//       max_requests_per_minute
//       created_at
//       updated_at
//     }
//   }
// `;

// export const CREATE_CLIENT = gql`
//   mutation CreateClient($object: clients_insert_input!) {
//     insert_clients_one(object: $object) {
//       id
//       app_id
//       public_key
//       website_url
//       allowed_domains
//       widget_position
//       widget_theme
//       is_active
//       monthly_try_on_limit
//       monthly_try_on_count
//       require_referrer_check
//       max_requests_per_minute
//       created_at
//       updated_at
//     }
//   }
// `;

// export const UPDATE_CLIENT = gql`
//   mutation UpdateClient($id: Int!, $changes: clients_set_input!) {
//     update_clients_by_pk(pk_columns: {id: $id}, _set: $changes) {
//       id
//       app_id
//       public_key
//       website_url
//       allowed_domains
//       widget_position
//       widget_theme
//       is_active
//       monthly_try_on_limit
//       monthly_try_on_count
//       require_referrer_check
//       max_requests_per_minute
//       updated_at
//     }
//   }
// `;

// export const REGENERATE_CLIENT_KEYS = gql`
//   mutation RegenerateClientKeys($id: Int!, $secretKey: String!, $publicKey: String!) {
//     update_clients_by_pk(pk_columns: {id: $id}, _set: {secret_key: $secretKey, public_key: $publicKey}) {
//       id
//       public_key
//       updated_at
//     }
//   }
// `;

// // Analytics operations
// export const GET_CLIENT_ANALYTICS = gql`
//   query GetClientAnalytics($clientId: Int!) {
//     analytics(where: {client_id: {_eq: $clientId}}, order_by: {created_at: desc}) {
//       id
//       event_type
//       metadata
//       origin_domain
//       created_at
//     }
//     analytics_aggregate(where: {client_id: {_eq: $clientId}}) {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const GET_TRY_ON_SESSIONS = gql`
//   query GetTryOnSessions($clientId: Int!) {
//     try_on_sessions(where: {client_id: {_eq: $clientId}}, order_by: {created_at: desc}) {
//       id
//       status
//       origin_domain
//       created_at
//     }
//     try_on_sessions_aggregate(where: {client_id: {_eq: $clientId}}) {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// // Admin operations
// export const GET_ALL_CLIENTS = gql`
//   query GetAllClients {
//     clients(order_by: {created_at: desc}) {
//       id
//       app_id
//       website_url
//       is_active
//       monthly_try_on_count
//       monthly_try_on_limit
//       created_at
//       user {
//         id
//         email
//         displayName
//       }
//     }
//   }
// `;

// export const GET_ALL_USERS = gql`
//   query GetAllUsers {
//     users(order_by: {createdAt: desc}) {
//       id
//       email
//       displayName
//       isAnonymous
//       disabled
//       createdAt
//       lastSeen
//     }
//   }
// `;

// export const TOGGLE_CLIENT_STATUS = gql`
//   mutation ToggleClientStatus($id: Int!, $isActive: Boolean!) {
//     update_clients_by_pk(pk_columns: {id: $id}, _set: {is_active: $isActive}) {
//       id
//       is_active
//     }
//   }
// `;

// export const TOGGLE_USER_STATUS = gql`
//   mutation ToggleUserStatus($id: uuid!, $disabled: Boolean!) {
//     updateUser(pk_columns: {id: $id}, _set: {disabled: $disabled}) {
//       id
//       disabled
//     }
//   }
// `;
