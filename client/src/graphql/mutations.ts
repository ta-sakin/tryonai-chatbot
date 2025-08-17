import { gql } from "@apollo/client";

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: uuid!, $changes: clients_set_input!) {
    update_clients_by_pk(pk_columns: { id: $id }, _set: $changes) {
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
      require_referrer_check
      max_requests_per_minute
      updated_at
    }
  }
`;
export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($userId: uuid!, $displayName: String!) {
    updateUser(
      pk_columns: { id: $userId }
      _set: { displayName: $displayName }
    ) {
      id
      displayName
    }
  }
`;
export const REGENERATE_CLIENT_KEYS = gql`
  mutation RegenerateClientKeys(
    $id: uuid!
    $secretKey: String!
    $publicKey: String!
  ) {
    update_clients_by_pk(
      pk_columns: { id: $id }
      _set: { secret_key: $secretKey, public_key: $publicKey }
    ) {
      id
      public_key
      updated_at
    }
  }
`;

// User mutations
export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $changes: users_set_input!) {
    updateUser(pk_columns: { id: $id }, _set: $changes) {
      id
      email
      displayName
      disabled
      updatedAt
    }
  }
`;

// Admin mutations
export const TOGGLE_CLIENT_STATUS = gql`
  mutation ToggleClientStatus($id: Int!, $isActive: Boolean!) {
    update_clients_by_pk(
      pk_columns: { id: $id }
      _set: { is_active: $isActive }
    ) {
      id
      is_active
    }
  }
`;

export const TOGGLE_USER_STATUS = gql`
  mutation ToggleUserStatus($id: uuid!, $disabled: Boolean!) {
    updateUser(pk_columns: { id: $id }, _set: { disabled: $disabled }) {
      id
      disabled
    }
  }
`;

// Analytics mutations
export const CREATE_ANALYTICS_EVENT = gql`
  mutation CreateAnalyticsEvent($object: analytics_insert_input!) {
    insert_analytics_one(object: $object) {
      id
      event_type
      client_id
      metadata
      origin_domain
      created_at
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation InsertClients($objects: [clients_insert_input!]!) {
    insert_clients(objects: $objects) {
      affected_rows
      returning {
        id
        user_id
        app_id
        website_url
        widget_position
        widget_theme
        is_active
        monthly_try_on_limit
        monthly_try_on_count
        last_reset_date
        created_at
        updated_at
        public_key
        secret_key
        allowed_domains
        require_referrer_check
        allowed_ip_ranges
        max_requests_per_minute
      }
    }
  }
`;
