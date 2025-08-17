import { Request, Response } from 'express';
import { nhost } from '../utils/nhost-admin';

interface AnalyticsRequest {
  sessionToken: string;
  eventType: string;
  metadata?: any;
}

function verifySessionToken(token: string) {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());
    if (decoded.expiresAt < Date.now()) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}

export default async (req: Request, res: Response) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sessionToken, eventType, metadata }: AnalyticsRequest = req.body;

    if (!sessionToken) {
      return res.status(401).json({ error: 'Session token required' });
    }

    // Validate session token
    const tokenData = verifySessionToken(sessionToken);
    if (!tokenData) {
      return res.status(401).json({ error: 'Invalid or expired session token' });
    }

    // Get client data
    const { data: clientData, error: clientError } = await nhost.graphql.request(`
      query GetClient($id: Int!) {
        clients_by_pk(id: $id) {
          id
          is_active
        }
      }
    `, { id: tokenData.clientId });

    if (clientError || !clientData?.clients_by_pk?.is_active) {
      return res.status(404).json({ error: 'Invalid client' });
    }

    // Create analytics record
    const { data, error } = await nhost.graphql.request(`
      mutation CreateAnalytics($object: analytics_insert_input!) {
        insert_analytics_one(object: $object) {
          id
          event_type
          created_at
        }
      }
    `, {
      object: {
        client_id: tokenData.clientId,
        event_type: eventType,
        metadata: metadata || {},
        origin_domain: tokenData.domain,
        user_ip: req.ip || 'unknown'
      }
    });

    if (error) {
      throw new Error('Failed to create analytics record');
    }

    res.json(data.insert_analytics_one);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(400).json({ error: 'Invalid analytics data' });
  }
};