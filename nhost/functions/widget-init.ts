import { Request, Response } from 'express';
import { nhost } from '../utils/nhost-admin';

interface WidgetInitRequest {
  publicKey: string;
  domain: string;
}

export default async (req: Request, res: Response) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { publicKey, domain }: WidgetInitRequest = req.body;

    if (!publicKey || !domain) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Get client by public key using GraphQL
    const { data, error } = await nhost.graphql.request(`
      query GetClientByPublicKey($publicKey: String!) {
        clients(where: {public_key: {_eq: $publicKey}, is_active: {_eq: true}}) {
          id
          widget_position
          widget_theme
          max_requests_per_minute
          allowed_domains
          require_referrer_check
        }
      }
    `, { publicKey });

    if (error || !data?.clients?.length) {
      return res.status(404).json({ error: 'Invalid widget configuration' });
    }

    const client = data.clients[0];

    // Validate domain if required
    if (client.require_referrer_check && client.allowed_domains?.length > 0) {
      const allowedDomains = client.allowed_domains as string[];
      const isAllowed = allowedDomains.some(allowedDomain => 
        domain.includes(allowedDomain) || allowedDomain === '*'
      );
      
      if (!isAllowed) {
        return res.status(403).json({ error: 'Domain not authorized' });
      }
    }

    // Generate session token (simplified - in production use proper JWT)
    const sessionToken = Buffer.from(JSON.stringify({
      clientId: client.id,
      domain,
      timestamp: Date.now(),
      expiresAt: Date.now() + (60 * 60 * 1000) // 1 hour
    })).toString('base64');

    // Track widget initialization
    await nhost.graphql.request(`
      mutation CreateAnalytics($object: analytics_insert_input!) {
        insert_analytics_one(object: $object) {
          id
        }
      }
    `, {
      object: {
        client_id: client.id,
        event_type: 'widget_init',
        metadata: { domain, publicKey },
        origin_domain: domain,
        user_ip: req.ip || 'unknown'
      }
    });

    res.json({
      sessionToken,
      config: {
        position: client.widget_position,
        theme: client.widget_theme,
        maxRequestsPerMinute: client.max_requests_per_minute,
      },
    });
  } catch (error) {
    console.error('Widget init error:', error);
    res.status(500).json({ error: 'Widget initialization failed' });
  }
};