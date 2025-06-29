import { 
  users, 
  clients, 
  tryOnSessions, 
  analytics,
  rateLimits,
  type User, 
  type InsertUser, 
  type Client, 
  type InsertClient, 
  type TryOnSession, 
  type InsertTryOnSession,
  type Analytics,
  type InsertAnalytics,
  type RateLimit,
  type InsertRateLimit
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, gte } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
  
  // Client methods
  getClient(id: number): Promise<Client | undefined>;
  getClientByUserId(userId: number): Promise<Client | undefined>;
  getClientByAppId(appId: string): Promise<Client | undefined>;
  createClient(client: InsertClient): Promise<Client>;
  updateClient(id: number, updates: Partial<Client>): Promise<Client | undefined>;
  getAllClients(): Promise<Client[]>;
  incrementTryOnCount(clientId: number): Promise<void>;
  resetMonthlyCount(clientId: number): Promise<void>;
  
  // Try-on session methods
  createTryOnSession(session: InsertTryOnSession): Promise<TryOnSession>;
  getTryOnSession(id: number): Promise<TryOnSession | undefined>;
  updateTryOnSession(id: number, updates: Partial<TryOnSession>): Promise<TryOnSession | undefined>;
  getTryOnSessionsByClient(clientId: number): Promise<TryOnSession[]>;
  
  // Analytics methods
  createAnalytics(analytics: InsertAnalytics): Promise<Analytics>;
  getAnalyticsByClient(clientId: number): Promise<Analytics[]>;
  
  // Rate limiting methods
  getRateLimitCount(clientId: number, identifier: string, windowStart: Date): Promise<number>;
  incrementRateLimit(clientId: number, identifier: string): Promise<void>;
  cleanupOldRateLimits(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async getUserByGoogleId(googleId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.googleId, googleId));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({
        ...insertUser,
        isActive: true,
        isAdmin: false,
        updatedAt: new Date(),
      })
      .returning();
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users).orderBy(desc(users.createdAt));
  }

  async getClient(id: number): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.id, id));
    return client;
  }

  async getClientByUserId(userId: number): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.userId, userId));
    return client;
  }

  async getClientByAppId(appId: string): Promise<Client | undefined> {
    const [client] = await db.select().from(clients).where(eq(clients.appId, appId));
    return client;
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const [client] = await db
      .insert(clients)
      .values({
        ...insertClient,
        isActive: true,
        monthlyTryOnLimit: 100,
        monthlyTryOnCount: 0,
        lastResetDate: new Date(),
        allowedDomains: [],
        requireReferrerCheck: true,
        allowedIpRanges: [],
        maxRequestsPerMinute: 10,
        updatedAt: new Date(),
      })
      .returning();
    return client;
  }

  async updateClient(id: number, updates: Partial<Client>): Promise<Client | undefined> {
    const [client] = await db
      .update(clients)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(clients.id, id))
      .returning();
    return client;
  }

  async getAllClients(): Promise<Client[]> {
    return await db
      .select({
        id: clients.id,
        userId: clients.userId,
        appId: clients.appId,
        websiteUrl: clients.websiteUrl,
        allowedDomains: clients.allowedDomains,
        widgetPosition: clients.widgetPosition,
        widgetTheme: clients.widgetTheme,
        isActive: clients.isActive,
        monthlyTryOnLimit: clients.monthlyTryOnLimit,
        monthlyTryOnCount: clients.monthlyTryOnCount,
        lastResetDate: clients.lastResetDate,
        requireReferrerCheck: clients.requireReferrerCheck,
        allowedIpRanges: clients.allowedIpRanges,
        maxRequestsPerMinute: clients.maxRequestsPerMinute,
        createdAt: clients.createdAt,
        updatedAt: clients.updatedAt,
        username: users.username,
        email: users.email,
      })
      .from(clients)
      .leftJoin(users, eq(clients.userId, users.id))
      .orderBy(desc(clients.createdAt));
  }

  async incrementTryOnCount(clientId: number): Promise<void> {
    const client = await this.getClient(clientId);
    if (client) {
      await db
        .update(clients)
        .set({ 
          monthlyTryOnCount: client.monthlyTryOnCount + 1,
          updatedAt: new Date()
        })
        .where(eq(clients.id, clientId));
    }
  }

  async resetMonthlyCount(clientId: number): Promise<void> {
    await db
      .update(clients)
      .set({ 
        monthlyTryOnCount: 0,
        lastResetDate: new Date(),
        updatedAt: new Date()
      })
      .where(eq(clients.id, clientId));
  }

  async createTryOnSession(insertSession: InsertTryOnSession): Promise<TryOnSession> {
    const [session] = await db
      .insert(tryOnSessions)
      .values({
        ...insertSession,
        status: "processing",
        clothingImageUrl: null,
        resultImage: null,
      })
      .returning();
    return session;
  }

  async getTryOnSession(id: number): Promise<TryOnSession | undefined> {
    const [session] = await db.select().from(tryOnSessions).where(eq(tryOnSessions.id, id));
    return session;
  }

  async updateTryOnSession(id: number, updates: Partial<TryOnSession>): Promise<TryOnSession | undefined> {
    const [session] = await db
      .update(tryOnSessions)
      .set(updates)
      .where(eq(tryOnSessions.id, id))
      .returning();
    return session;
  }

  async getTryOnSessionsByClient(clientId: number): Promise<TryOnSession[]> {
    return await db
      .select()
      .from(tryOnSessions)
      .where(eq(tryOnSessions.clientId, clientId))
      .orderBy(desc(tryOnSessions.createdAt));
  }

  async createAnalytics(insertAnalytics: InsertAnalytics): Promise<Analytics> {
    const [analyticsRecord] = await db
      .insert(analytics)
      .values({
        ...insertAnalytics,
        metadata: insertAnalytics.metadata || {},
      })
      .returning();
    return analyticsRecord;
  }

  async getAnalyticsByClient(clientId: number): Promise<Analytics[]> {
    return await db
      .select()
      .from(analytics)
      .where(eq(analytics.clientId, clientId))
      .orderBy(desc(analytics.createdAt));
  }

  async getRateLimitCount(clientId: number, identifier: string, windowStart: Date): Promise<number> {
    const [result] = await db
      .select({ count: rateLimits.requestCount })
      .from(rateLimits)
      .where(
        and(
          eq(rateLimits.clientId, clientId),
          eq(rateLimits.identifier, identifier),
          gte(rateLimits.windowStart, windowStart)
        )
      );
    
    return result?.count || 0;
  }

  async incrementRateLimit(clientId: number, identifier: string): Promise<void> {
    const now = new Date();
    const windowStart = new Date(now.getTime() - 60000); // 1 minute window

    // Try to update existing record
    const [existing] = await db
      .select()
      .from(rateLimits)
      .where(
        and(
          eq(rateLimits.clientId, clientId),
          eq(rateLimits.identifier, identifier),
          gte(rateLimits.windowStart, windowStart)
        )
      );

    if (existing) {
      await db
        .update(rateLimits)
        .set({ requestCount: existing.requestCount + 1 })
        .where(eq(rateLimits.id, existing.id));
    } else {
      await db
        .insert(rateLimits)
        .values({
          clientId,
          identifier,
          requestCount: 1,
          windowStart: now,
        });
    }
  }

  async cleanupOldRateLimits(): Promise<void> {
    const oneHourAgo = new Date(Date.now() - 3600000);
    await db
      .delete(rateLimits)
      .where(gte(rateLimits.windowStart, oneHourAgo));
  }
}

export const storage = new DatabaseStorage();