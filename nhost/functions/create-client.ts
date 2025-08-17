import crypto from "crypto";

interface CreateClientRequest {
  userId: string;
  websiteUrl?: string;
  allowedDomains?: string[];
}

function generateAppId(): string {
  return "app_" + crypto.randomBytes(16).toString("hex");
}

export default async (req: Request, res: Response) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      userId,
      websiteUrl,
      allowedDomains = [],
    }: CreateClientRequest = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    // Generate secure keys
    const appId = generateAppId();
    const secretKey = crypto.randomBytes(32).toString("hex");
    const publicKey = crypto.randomBytes(16).toString("hex");

    // Create client
    const { data, error } = await nhost.graphql.request(
      `
      mutation CreateClient($object: clients_insert_input!) {
        insert_clients_one(object: $object) {
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
          created_at
          updated_at
        }
      }
    `,
      {
        object: {
          user_id: userId,
          app_id: appId,
          secret_key: secretKey,
          public_key: publicKey,
          website_url: websiteUrl || null,
          allowed_domains: allowedDomains,
          widget_position: "bottom-right",
          widget_theme: "default",
          is_active: true,
          monthly_try_on_limit: 100,
          monthly_try_on_count: 0,
          require_referrer_check: true,
          allowed_ip_ranges: [],
          max_requests_per_minute: 10,
        },
      }
    );

    if (error) {
      throw new Error("Failed to create client");
    }

    // Don't return the secret key to the client
    const client = { ...data.insert_clients_one };
    delete client.secret_key;

    res.json(client);
  } catch (error) {
    console.error("Create client error:", error);
    res.status(500).json({ error: "Failed to create client" });
  }
};
