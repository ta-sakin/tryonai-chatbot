import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { SecurityValidator } from "./security";
import bcrypt from "bcryptjs";
import session from "express-session";
import connectPg from "connect-pg-simple";
import crypto from "crypto";
import { 
  insertUserSchema, 
  insertClientSchema,
  loginSchema,
  tryOnRequestSchema,
  insertTryOnSessionSchema,
  insertAnalyticsSchema,
  adminLoginSchema
} from "@shared/schema";
import { generateAppId as utilsGenerateAppId, parseBase64Image } from "./utils";

// Extend session data
declare module 'express-session' {
  interface SessionData {
    userId: number;
    clientId: number;
    isAdmin: boolean;
    lastActivity: number;
  }
}

// Gemini AI integration
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || "";

export async function registerRoutes(app: Express): Promise<Server> {
  // Session middleware with PostgreSQL store
  const pgStore = connectPg(session);
  app.use(session({
    store: new pgStore({
      conString: process.env.DATABASE_URL,
      createTableIfMissing: true,
      tableName: 'session'
    }),
    secret: process.env.SESSION_SECRET || "default-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false, 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true
    },
    rolling: true, // Reset expiration on each request
  }));

  // Session refresh middleware
  const refreshSession = (req: any, res: any, next: any) => {
    if (req.session.userId) {
      const now = Date.now();
      const lastActivity = req.session.lastActivity || 0;
      const timeSinceLastActivity = now - lastActivity;
      
      // If more than 30 minutes since last activity, refresh session
      if (timeSinceLastActivity > 30 * 60 * 1000) {
        req.session.lastActivity = now;
        req.session.save((err: any) => {
          if (err) {
            console.error('Session save error:', err);
          }
        });
      }
    }
    next();
  };

  // Apply session refresh to all routes
  app.use(refreshSession);

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: "Authentication required" });
    }
    
    // Update last activity
    req.session.lastActivity = Date.now();
    next();
  };

  const requireAdmin = (req: any, res: any, next: any) => {
    if (!req.session.userId || !req.session.isAdmin) {
      return res.status(403).json({ error: "Admin access required" });
    }
    
    // Update last activity
    req.session.lastActivity = Date.now();
    next();
  };

  // Auth routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      // Create user
      const user = await storage.createUser({
        ...userData,
        password: hashedPassword,
        isActive: true,
        isAdmin: false,
      });

      // Generate secure keys
      const appId = utilsGenerateAppId();
      const secretKey = crypto.randomBytes(32).toString('hex');
      const publicKey = crypto.randomBytes(16).toString('hex');

      // Create client with secure keys
      const client = await storage.createClient({
        userId: user.id,
        appId: appId,
        secretKey: secretKey,
        publicKey: publicKey,
        websiteUrl: null,
        allowedDomains: [],
        widgetPosition: "bottom-right",
        widgetTheme: "default",
        isActive: true,
        requireReferrerCheck: true,
        allowedIpRanges: [],
        maxRequestsPerMinute: 10,
      });

      // Set session with activity tracking
      req.session.userId = user.id;
      req.session.clientId = client.id;
      req.session.isAdmin = user.isAdmin;
      req.session.lastActivity = Date.now();

      res.json({ 
        user: { id: user.id, username: user.username, email: user.email },
        client: {
          ...client,
          secretKey: undefined // Never expose secret key to frontend
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ error: "Invalid data provided" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const loginData = loginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(loginData.email);
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const isValidPassword = await bcrypt.compare(loginData.password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const client = await storage.getClientByUserId(user.id);
      
      // Set session with activity tracking
      req.session.userId = user.id;
      req.session.clientId = client?.id;
      req.session.isAdmin = user.isAdmin;
      req.session.lastActivity = Date.now();

      res.json({ 
        user: { id: user.id, username: user.username, email: user.email },
        client: client ? {
          ...client,
          secretKey: undefined // Never expose secret key
        } : null
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(400).json({ error: "Invalid data provided" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not log out" });
      }
      res.json({ success: true });
    });
  });

  // Session refresh endpoint
  app.post("/api/auth/refresh", requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      const client = await storage.getClientByUserId(req.session.userId!);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update session activity
      req.session.lastActivity = Date.now();
      
      res.json({
        user: { id: user.id, username: user.username, email: user.email, isAdmin: user.isAdmin },
        client: client ? {
          ...client,
          secretKey: undefined // Never expose secret key
        } : null,
        refreshed: true
      });
    } catch (error) {
      console.error("Session refresh error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/auth/me", requireAuth, async (req, res) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      const client = await storage.getClientByUserId(req.session.userId!);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({
        user: { id: user.id, username: user.username, email: user.email, isAdmin: user.isAdmin },
        client: client ? {
          ...client,
          secretKey: undefined // Never expose secret key
        } : null
      });
    } catch (error) {
      console.error("Auth check error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Admin routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const loginData = adminLoginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(loginData.email);
      if (!user || !user.isAdmin) {
        return res.status(401).json({ error: "Invalid admin credentials" });
      }

      const isValidPassword = await bcrypt.compare(loginData.password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid admin credentials" });
      }
      
      // Set session with activity tracking
      req.session.userId = user.id;
      req.session.isAdmin = true;
      req.session.lastActivity = Date.now();

      res.json({ 
        user: { id: user.id, username: user.username, email: user.email, isAdmin: user.isAdmin }
      });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(400).json({ error: "Invalid data provided" });
    }
  });

  app.get("/api/admin/dashboard", requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      const clients = await storage.getAllClients();
      
      const totalUsers = users.length;
      const activeUsers = users.filter(u => u.isActive).length;
      const totalWidgets = clients.length;
      const activeWidgets = clients.filter(c => c.isActive).length;

      res.json({
        stats: {
          totalUsers,
          activeUsers,
          totalWidgets,
          activeWidgets
        },
        users: users.slice(0, 10), // Latest 10 users
        clients: clients.slice(0, 10) // Latest 10 clients
      });
    } catch (error) {
      console.error("Admin dashboard error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/admin/users", requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Admin users error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.put("/api/admin/users/:id/toggle", requireAdmin, async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const updatedUser = await storage.updateUser(userId, { isActive: !user.isActive });
      res.json(updatedUser);
    } catch (error) {
      console.error("Admin toggle user error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.put("/api/admin/clients/:id/toggle", requireAdmin, async (req, res) => {
    try {
      const clientId = parseInt(req.params.id);
      const client = await storage.getClient(clientId);
      
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }

      const updatedClient = await storage.updateClient(clientId, { isActive: !client.isActive });
      res.json(updatedClient);
    } catch (error) {
      console.error("Admin toggle client error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Client management routes
  app.put("/api/client/settings", requireAuth, async (req, res) => {
    try {
      const client = await storage.getClientByUserId(req.session.userId!);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }

      const updates = {
        websiteUrl: req.body.websiteUrl,
        allowedDomains: req.body.allowedDomains || [],
        widgetPosition: req.body.widgetPosition,
        widgetTheme: req.body.widgetTheme,
        requireReferrerCheck: req.body.requireReferrerCheck !== false,
        maxRequestsPerMinute: req.body.maxRequestsPerMinute || 10,
      };

      const updatedClient = await storage.updateClient(client.id, updates);
      res.json({
        ...updatedClient,
        secretKey: undefined // Never expose secret key
      });
    } catch (error) {
      console.error("Settings update error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/client/analytics", requireAuth, async (req, res) => {
    try {
      const client = await storage.getClientByUserId(req.session.userId!);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }

      const analytics = await storage.getAnalyticsByClient(client.id);
      const sessions = await storage.getTryOnSessionsByClient(client.id);

      // Calculate stats
      const views = analytics.filter(a => a.eventType === "view").length;
      const tryOns = sessions.length;
      const conversions = analytics.filter(a => a.eventType === "conversion").length;

      res.json({
        totalViews: views,
        tryOns: tryOns,
        conversions: conversions,
        conversionRate: tryOns > 0 ? ((conversions / tryOns) * 100).toFixed(1) : "0",
        monthlyTryOnCount: client.monthlyTryOnCount,
        monthlyTryOnLimit: client.monthlyTryOnLimit,
        recentActivity: analytics.slice(-10).reverse()
      });
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Widget initialization endpoint (secure)
  app.post("/api/widget/init", async (req, res) => {
    try {
      const { publicKey, domain } = req.body;
      
      if (!publicKey || !domain) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      // Get client by public key
      const client = await storage.getClientByPublicKey(publicKey);
      if (!client || !client.isActive) {
        return res.status(404).json({ error: "Invalid widget configuration" });
      }

      // Validate domain if required
      if (client.requireReferrerCheck && client.allowedDomains && client.allowedDomains.length > 0) {
        const allowedDomains = client.allowedDomains as string[];
        if (!SecurityValidator.validateDomain(`https://${domain}`, allowedDomains)) {
          return res.status(403).json({ error: "Domain not authorized" });
        }
      }

      // Generate secure session token
      const sessionToken = SecurityValidator.generateSessionToken(client.id, domain);

      // Track widget initialization
      await storage.createAnalytics({
        clientId: client.id,
        eventType: "widget_init",
        metadata: { domain, publicKey },
        originDomain: domain,
        userIp: req.ip || req.connection.remoteAddress || 'unknown',
      });

      res.json({
        sessionToken,
        config: {
          position: client.widgetPosition,
          theme: client.widgetTheme,
          maxRequestsPerMinute: client.maxRequestsPerMinute,
        }
      });
    } catch (error) {
      console.error("Widget init error:", error);
      res.status(500).json({ error: "Widget initialization failed" });
    }
  });

  // Virtual try-on routes with secure token validation
  app.post("/api/try-on", async (req, res) => {
    try {
      const { sessionToken, userImage, clothingImage, clothingImageUrl } = req.body;
      
      if (!sessionToken) {
        return res.status(401).json({ error: "Session token required" });
      }

      // Validate session token
      const tokenData = SecurityValidator.verifySessionToken(sessionToken);
      if (!tokenData) {
        return res.status(401).json({ error: "Invalid or expired session token" });
      }

      const client = await storage.getClient(tokenData.clientId);
      if (!client || !client.isActive) {
        return res.status(404).json({ error: "Invalid client" });
      }

      // Enhanced security validation
      const securityResult = await SecurityValidator.validateTokenRequest(req, tokenData);
      if (!securityResult.isValid) {
        return res.status(403).json({ error: securityResult.error });
      }

      // Check monthly limits
      const now = new Date();
      const lastReset = new Date(client.lastResetDate);
      const monthsApart = (now.getFullYear() - lastReset.getFullYear()) * 12 + (now.getMonth() - lastReset.getMonth());
      
      if (monthsApart >= 1) {
        await storage.resetMonthlyCount(client.id);
        const updatedClient = await storage.getClient(client.id);
        if (updatedClient) {
          client.monthlyTryOnCount = updatedClient.monthlyTryOnCount;
        }
      }

      if (client.monthlyTryOnCount >= client.monthlyTryOnLimit) {
        return res.status(429).json({ 
          error: "Monthly try-on limit exceeded", 
          limit: client.monthlyTryOnLimit,
          used: client.monthlyTryOnCount
        });
      }

      // Determine clothing image source
      let clothingImageToProcess = clothingImage;
      if (clothingImageUrl && !clothingImage) {
        try {
          // Convert URL to base64 for processing
          const response = await fetch(clothingImageUrl);
          const buffer = await response.arrayBuffer();
          const base64 = Buffer.from(buffer).toString('base64');
          const mimeType = response.headers.get('content-type') || 'image/jpeg';
          clothingImageToProcess = `data:${mimeType};base64,${base64}`;
        } catch (fetchError) {
          console.error("Failed to fetch clothing image from URL:", fetchError);
          return res.status(400).json({ error: "Failed to load clothing image from URL" });
        }
      }

      if (!clothingImageToProcess) {
        return res.status(400).json({ error: "Either clothingImage or clothingImageUrl must be provided" });
      }

      // Get origin and IP for tracking
      const userIp = req.ip || req.connection.remoteAddress || 'unknown';

      // Create try-on session with security tracking
      const session = await storage.createTryOnSession({
        clientId: client.id,
        userImage: userImage,
        clothingImage: clothingImageToProcess,
        clothingImageUrl: clothingImageUrl || null,
        resultImage: null,
        status: "processing",
        originDomain: tokenData.domain,
        userIp: userIp,
      });

      // Increment try-on count
      await storage.incrementTryOnCount(client.id);

      // Track analytics with security info
      await storage.createAnalytics({
        clientId: client.id,
        eventType: "try_on",
        metadata: { 
          sessionId: session.id, 
          clothingImageUrl: clothingImageUrl,
          securityValidated: true,
          tokenUsed: true
        },
        originDomain: tokenData.domain,
        userIp: userIp,
      });

      // Process with Gemini AI
      try {
        const resultImage = await processWithGemini(userImage, clothingImageToProcess);
        
        await storage.updateTryOnSession(session.id, {
          resultImage,
          status: "completed"
        });

        res.json({ 
          sessionId: session.id,
          resultImage,
          status: "completed"
        });
      } catch (aiError) {
        console.error("Gemini AI error:", aiError);
        await storage.updateTryOnSession(session.id, { status: "failed" });
        res.status(500).json({ error: "AI processing failed" });
      }
    } catch (error) {
      console.error("Try-on error:", error);
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/try-on/:sessionId", async (req, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);
      const session = await storage.getTryOnSession(sessionId);
      
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      res.json(session);
    } catch (error) {
      console.error("Session fetch error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Analytics tracking with token validation
  app.post("/api/analytics", async (req, res) => {
    try {
      const { sessionToken, eventType, metadata } = req.body;
      
      if (!sessionToken) {
        return res.status(401).json({ error: "Session token required" });
      }

      // Validate session token
      const tokenData = SecurityValidator.verifySessionToken(sessionToken);
      if (!tokenData) {
        return res.status(401).json({ error: "Invalid or expired session token" });
      }

      const client = await storage.getClient(tokenData.clientId);
      if (!client || !client.isActive) {
        return res.status(404).json({ error: "Invalid client" });
      }

      // Add origin and IP tracking
      const userIp = req.ip || req.connection.remoteAddress || 'unknown';

      const analytics = await storage.createAnalytics({
        clientId: client.id,
        eventType,
        metadata: metadata || {},
        originDomain: tokenData.domain,
        userIp: userIp,
      });
      
      res.json(analytics);
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(400).json({ error: "Invalid analytics data" });
    }
  });

  // Regenerate keys endpoint
  app.post("/api/client/regenerate-keys", requireAuth, async (req, res) => {
    try {
      const client = await storage.getClientByUserId(req.session.userId!);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }

      // Generate new keys
      const newSecretKey = crypto.randomBytes(32).toString('hex');
      const newPublicKey = crypto.randomBytes(16).toString('hex');

      const updatedClient = await storage.updateClient(client.id, {
        secretKey: newSecretKey,
        publicKey: newPublicKey,
      });

      res.json({
        ...updatedClient,
        secretKey: undefined // Never expose secret key
      });
    } catch (error) {
      console.error("Key regeneration error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Cleanup old rate limits periodically
  setInterval(async () => {
    try {
      await storage.cleanupOldRateLimits();
    } catch (error) {
      console.error("Rate limit cleanup error:", error);
    }
  }, 300000); // Every 5 minutes

  const httpServer = createServer(app);
  return httpServer;
}

async function processWithGemini(userImage: string, clothingImage: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key not configured");
  }

  try {
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const userImageData = parseBase64Image(userImage);
    const clothingImageData = parseBase64Image(clothingImage);

    const prompt = `
      Create a virtual try-on result by combining these two images:
      1. A person's photo (user image)
      2. A clothing item (clothing image)
      
      Generate a photorealistic image showing the person wearing the clothing item.
      The result should look natural and maintain the person's proportions and pose.
      Return only the processed image data.
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: userImageData.base64,
          mimeType: userImageData.mimeType,
        },
      },
      {
        inlineData: {
          data: clothingImageData.base64,
          mimeType: clothingImageData.mimeType,
        },
      },
    ]);

    const response = await result.response;
    const text = response.text();
    
    // For now, return a placeholder since Gemini doesn't generate images directly
    // In production, you'd integrate with an image generation service
    return userImage; // Placeholder - return original image
  } catch (error) {
    console.error("Gemini processing error:", error);
    throw new Error("AI processing failed");
  }
}

function generateAppId(): string {
  return utilsGenerateAppId();
}