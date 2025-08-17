import { Request } from "express";
import crypto from "crypto";
import { nhost } from "../shared/nhost";

export interface SecurityValidationResult {
  isValid: boolean;
  error?: string;
  client?: any;
}

export interface TokenData {
  clientId: number;
  domain: string;
  exp: number;
  iat: number;
}
export const getClientByAppId = async (appId) => {
  return await nhost.graphql.request(
    `query GetClients($appId: String!) {
          clients(where: { app_id: { _eq: $appId } }) {
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
        }`,
    { appId }
  );
};
export class SecurityValidator {
  private static readonly SECRET_KEY =
    process.env.SESSION_SECRET || "default-secret-key";

  /**
   * Validate domain origin against allowed domains
   */
  static validateDomain(
    origin: string | undefined,
    allowedDomains: string[]
  ): boolean {
    if (!origin || allowedDomains.length === 0) {
      return false;
    }

    try {
      const originUrl = new URL(origin);
      const originDomain = originUrl.hostname;

      return allowedDomains.some((allowedDomain) => {
        // Exact match
        if (allowedDomain === originDomain) {
          return true;
        }

        // Wildcard subdomain match (*.example.com)
        if (allowedDomain.startsWith("*.")) {
          const baseDomain = allowedDomain.substring(2);
          return (
            originDomain.endsWith("." + baseDomain) ||
            originDomain === baseDomain
          );
        }

        return false;
      });
    } catch (error) {
      return false;
    }
  }

  /**
   * Validate referrer header
   */
  static validateReferrer(
    referrer: string | undefined,
    allowedDomains: string[]
  ): boolean {
    if (!referrer) {
      return false;
    }

    try {
      const referrerUrl = new URL(referrer);
      const referrerDomain = referrerUrl.hostname;

      return allowedDomains.some((allowedDomain) => {
        if (allowedDomain === referrerDomain) {
          return true;
        }

        if (allowedDomain.startsWith("*.")) {
          const baseDomain = allowedDomain.substring(2);
          return (
            referrerDomain.endsWith("." + baseDomain) ||
            referrerDomain === baseDomain
          );
        }

        return false;
      });
    } catch (error) {
      return false;
    }
  }

  /**
   * Check rate limiting
   */
  static async checkRateLimit(
    clientId: number,
    identifier: string,
    maxRequests: number
  ): Promise<boolean> {
    const now = new Date();
    const windowStart = new Date(now.getTime() - 60000); // 1 minute window

    try {
      // const currentCount = await storage.getRateLimitCount(
      //   clientId,
      //   identifier,
      //   windowStart
      // );

      // if (currentCount >= maxRequests) {
      //   return false;
      // }

      // await storage.incrementRateLimit(clientId, identifier);
      return true;
    } catch (error) {
      console.error("Rate limit check error:", error);
      return false;
    }
  }

  /**
   * Generate secure session token (like Intercom's approach)
   */
  static generateSessionToken(
    clientId: number,
    domain: string,
    expiresIn: number = 3600
  ): string {
    const payload: TokenData = {
      clientId,
      domain,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
      iat: Math.floor(Date.now() / 1000),
    };

    // Create HMAC signature
    const payloadStr = JSON.stringify(payload);
    const signature = crypto
      .createHmac("sha256", this.SECRET_KEY)
      .update(payloadStr)
      .digest("hex");

    // Combine payload and signature
    const token = Buffer.from(
      JSON.stringify({
        payload: payloadStr,
        signature,
      })
    ).toString("base64");

    return token;
  }

  /**
   * Verify session token
   */
  static verifySessionToken(token: string): TokenData | null {
    try {
      const decoded = JSON.parse(Buffer.from(token, "base64").toString());
      const { payload, signature } = decoded;

      // Verify signature
      const expectedSignature = crypto
        .createHmac("sha256", this.SECRET_KEY)
        .update(payload)
        .digest("hex");

      if (signature !== expectedSignature) {
        return null; // Invalid signature
      }

      const tokenData: TokenData = JSON.parse(payload);

      // Check expiration
      if (tokenData.exp < Math.floor(Date.now() / 1000)) {
        return null; // Token expired
      }

      return tokenData;
    } catch (error) {
      return null;
    }
  }

  /**
   * Validate request with token-based security
   */
  static async validateTokenRequest(
    req: Request,
    tokenData: TokenData
  ): Promise<SecurityValidationResult> {
    try {
      const { data, error } = await getClientByAppId("appId");
      const client = data.clients[0];
      if (!client || !client.isActive) {
        return { isValid: false, error: "Invalid client" };
      }

      const origin = req.headers.origin;
      const referrer = req.headers.referer;
      const userIp = req.ip || req.connection.remoteAddress || "unknown";

      // Validate domain matches token
      if (origin) {
        const originDomain = new URL(origin).hostname;
        if (originDomain !== tokenData.domain) {
          return { isValid: false, error: "Domain mismatch" };
        }
      }

      // Check domain validation if required
      if (
        client.requireReferrerCheck &&
        client.allowedDomains &&
        client.allowedDomains.length > 0
      ) {
        const allowedDomains = client.allowedDomains as string[];

        // Validate origin
        if (!this.validateDomain(origin, allowedDomains)) {
          return { isValid: false, error: "Origin domain not allowed" };
        }

        // Validate referrer as additional security
        if (!this.validateReferrer(referrer, allowedDomains)) {
          return { isValid: false, error: "Referrer domain not allowed" };
        }
      }

      // Check rate limiting
      const rateLimitIdentifier = `${tokenData.domain}:${userIp}`;
      const isWithinRateLimit = await this.checkRateLimit(
        client.id,
        rateLimitIdentifier,
        client.maxRequestsPerMinute
      );

      if (!isWithinRateLimit) {
        return { isValid: false, error: "Rate limit exceeded" };
      }

      return { isValid: true, client };
    } catch (error) {
      console.error("Token validation error:", error);
      return { isValid: false, error: "Token validation failed" };
    }
  }

  /**
   * Comprehensive security validation (legacy method for backward compatibility)
   */
  static async validateRequest(
    req: Request,
    appId: string
  ): Promise<SecurityValidationResult> {
    try {
      // Get client configuration
      const { data, error } = await getClientByAppId(appId);
      const client = data.clients[0];
      if (!client || !client.isActive) {
        return { isValid: false, error: "Invalid or inactive app ID" };
      }

      const origin = req.headers.origin;
      const referrer = req.headers.referer;
      const userIp = req.ip || req.connection.remoteAddress || "unknown";

      // Check domain validation if required
      if (
        client.requireReferrerCheck &&
        client.allowedDomains &&
        client.allowedDomains.length > 0
      ) {
        const allowedDomains = client.allowedDomains as string[];

        // Validate origin
        if (!this.validateDomain(origin, allowedDomains)) {
          return { isValid: false, error: "Origin domain not allowed" };
        }

        // Validate referrer as additional security
        if (!this.validateReferrer(referrer, allowedDomains)) {
          return { isValid: false, error: "Referrer domain not allowed" };
        }
      }

      // Check rate limiting
      const rateLimitIdentifier = origin || userIp;
      const isWithinRateLimit = await this.checkRateLimit(
        client.id,
        rateLimitIdentifier,
        client.maxRequestsPerMinute
      );

      if (!isWithinRateLimit) {
        return { isValid: false, error: "Rate limit exceeded" };
      }

      return { isValid: true, client };
    } catch (error) {
      console.error("Security validation error:", error);
      return { isValid: false, error: "Security validation failed" };
    }
  }

  /**
   * Generate secure widget token (alternative to exposing app ID)
   */
  static generateWidgetToken(
    appId: string,
    domain: string,
    expiresIn: number = 3600
  ): string {
    const payload = {
      appId,
      domain,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
      iat: Math.floor(Date.now() / 1000),
    };

    // In production, use proper JWT signing
    return Buffer.from(JSON.stringify(payload)).toString("base64");
  }

  /**
   * Verify widget token
   */
  static verifyWidgetToken(
    token: string
  ): { appId: string; domain: string } | null {
    try {
      const payload = JSON.parse(Buffer.from(token, "base64").toString());

      if (payload.exp < Math.floor(Date.now() / 1000)) {
        return null; // Token expired
      }

      return { appId: payload.appId, domain: payload.domain };
    } catch (error) {
      return null;
    }
  }
}
