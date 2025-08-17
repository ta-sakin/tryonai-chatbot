import { Request, Response } from 'express';
import { nhost } from '../../utils/nhost-admin';

export default async (req: Request, res: Response) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify admin access (you might want to implement proper JWT verification)
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Authorization required' });
    }

    // Get dashboard statistics
    const { data: usersData, error: usersError } = await nhost.graphql.request(`
      query GetDashboardStats {
        users_aggregate {
          aggregate {
            count
          }
        }
        users(where: {disabled: {_eq: false}}) {
          id
          email
          displayName
          createdAt
          lastSeen
        }
        clients_aggregate {
          aggregate {
            count
          }
        }
        clients(where: {is_active: {_eq: true}}) {
          id
          app_id
          website_url
          monthly_try_on_count
          monthly_try_on_limit
          created_at
          user {
            email
            displayName
          }
        }
        try_on_sessions_aggregate {
          aggregate {
            count
          }
        }
        analytics_aggregate {
          aggregate {
            count
          }
        }
      }
    `);

    if (usersError) {
      throw new Error('Failed to fetch dashboard data');
    }

    const stats = {
      totalUsers: usersData.users_aggregate.aggregate.count,
      activeUsers: usersData.users.length,
      totalClients: usersData.clients_aggregate.aggregate.count,
      activeClients: usersData.clients.length,
      totalTryOns: usersData.try_on_sessions_aggregate.aggregate.count,
      totalEvents: usersData.analytics_aggregate.aggregate.count,
    };

    res.json({
      stats,
      recentUsers: usersData.users.slice(0, 10),
      recentClients: usersData.clients.slice(0, 10),
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};