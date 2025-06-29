import { pgTable, text, serial, integer, boolean, timestamp, json, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Sessions table for authentication
export const sessions = pgTable("sessions", {
  sid: varchar("sid").primaryKey(),
  sess: json("sess").notNull(),
  expire: timestamp("expire").notNull(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password"), // Make nullable for OAuth users
  googleId: text("google_id").unique(), // Add Google ID
  avatar: text("avatar"), // Add avatar URL from Google
  provider: text("provider").default("local").notNull(), // local, google, etc.
  isActive: boolean("is_active").default(true).notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  appId: text("app_id").notNull().unique(),
  secretKey: text("secret_key").notNull(), // Server-side secret key (never exposed)
  publicKey: text("public_key").notNull(), // Public key for widget initialization
  websiteUrl: text("website_url"),
  allowedDomains: json("allowed_domains").default([]).notNull(), // Array of allowed domains
  widgetPosition: text("widget_position").default("bottom-right").notNull(),
  widgetTheme: text("widget_theme").default("default").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  monthlyTryOnLimit: integer("monthly_try_on_limit").default(100).notNull(),
  monthlyTryOnCount: integer("monthly_try_on_count").default(0).notNull(),
  lastResetDate: timestamp("last_reset_date").defaultNow().notNull(),
  // Security settings
  requireReferrerCheck: boolean("require_referrer_check").default(true).notNull(),
  allowedIpRanges: json("allowed_ip_ranges").default([]).notNull(), // Optional IP restrictions
  maxRequestsPerMinute: integer("max_requests_per_minute").default(10).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tryOnSessions = pgTable("try_on_sessions", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").notNull().references(() => clients.id),
  userImage: text("user_image").notNull(),
  clothingImage: text("clothing_image").notNull(),
  clothingImageUrl: text("clothing_image_url"), // Added for URL support
  resultImage: text("result_image"),
  status: text("status").default("processing").notNull(), // processing, completed, failed
  originDomain: text("origin_domain"), // Track where the request came from
  userIp: text("user_ip"), // Track IP for security
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").notNull().references(() => clients.id),
  eventType: text("event_type").notNull(), // view, try_on, conversion, widget_init
  metadata: json("metadata"),
  originDomain: text("origin_domain"), // Track analytics by domain
  userIp: text("user_ip"), // Track IP for analytics
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Rate limiting table
export const rateLimits = pgTable("rate_limits", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").notNull().references(() => clients.id),
  identifier: text("identifier").notNull(), // IP or domain
  requestCount: integer("request_count").default(0).notNull(),
  windowStart: timestamp("window_start").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  clients: many(clients),
}));

export const clientsRelations = relations(clients, ({ one, many }) => ({
  user: one(users, {
    fields: [clients.userId],
    references: [users.id],
  }),
  tryOnSessions: many(tryOnSessions),
  analytics: many(analytics),
  rateLimits: many(rateLimits),
}));

export const tryOnSessionsRelations = relations(tryOnSessions, ({ one }) => ({
  client: one(clients, {
    fields: [tryOnSessions.clientId],
    references: [clients.id],
  }),
}));

export const analyticsRelations = relations(analytics, ({ one }) => ({
  client: one(clients, {
    fields: [analytics.clientId],
    references: [clients.id],
  }),
}));

export const rateLimitsRelations = relations(rateLimits, ({ one }) => ({
  client: one(clients, {
    fields: [rateLimits.clientId],
    references: [clients.id],
  }),
}));

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertClientSchema = createInsertSchema(clients).omit({
  id: true,
  createdAt: true,
});

export const insertTryOnSessionSchema = createInsertSchema(tryOnSessions).omit({
  id: true,
  createdAt: true,
});

export const insertAnalyticsSchema = createInsertSchema(analytics).omit({
  id: true,
  createdAt: true,
});

export const insertRateLimitSchema = createInsertSchema(rateLimits).omit({
  id: true,
  createdAt: true,
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const tryOnRequestSchema = z.object({
  sessionToken: z.string(),
  userImage: z.string(),
  clothingImage: z.string().optional(),
  clothingImageUrl: z.string().optional(),
}).refine(data => data.clothingImage || data.clothingImageUrl, {
  message: "Either clothingImage or clothingImageUrl must be provided",
});

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Client = typeof clients.$inferSelect;
export type InsertClient = z.infer<typeof insertClientSchema>;
export type TryOnSession = typeof tryOnSessions.$inferSelect;
export type InsertTryOnSession = z.infer<typeof insertTryOnSessionSchema>;
export type Analytics = typeof analytics.$inferSelect;
export type InsertAnalytics = z.infer<typeof insertAnalyticsSchema>;
export type RateLimit = typeof rateLimits.$inferSelect;
export type InsertRateLimit = z.infer<typeof insertRateLimitSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
export type TryOnRequest = z.infer<typeof tryOnRequestSchema>;