import { Request } from "express";
import { storage } from "./storage";
import { Client } from "@shared/schema";

export interface SecurityValidationResult {
  isValid: boolean;
  error?: string;
  client?: Client;
}

export class SecurityValidator {
  /**
   * Validate domain origin against allowed domains
   */
  static validateDomain(origin: string | undefined, allowedDomains: string[]): boolean {
    if (!origin || allowedDomains.length === 0) {
      return false;
    }

    try {
      const originUrl = new URL(origin);
      const originDomain = originUrl.hostname;

      return allowedDomains.some(allowedDomain => {
        // Exact match
        if (allowedDomain === originDomain) {
          return true;
        }

        // Wildcard subdomain match (*.example.com)
        if (allowedDomain.startsWith('*.')) {
          const baseDomain = allowedDomain.substring(2);
          return originDomain.endsWith('.' + baseDomain) || originDomain === baseDomain;
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
  static validateReferrer(referrer: string | undefined, allowedDomains: string[]): boolean {
    if (!referrer) {
      return false;
    }

    try {
      const referrerUrl = new URL(referrer);
      const referrerDomain = referrerUrl.hostname;

      return allowedDomains.some(allowedDomain => {
        if (allowedDomain === referrerDomain) {
          return true;
        }

        if (allowedDomain.startsWith('*.')) {
          const baseDomain = allowedDomain.substring(2);
          return referrerDomain.endsWith('.' + baseDomain) || referrerDomain === baseDomain;
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
      const currentCount = await storage.getRateLimitCount(clientId, identifier, windowStart);
      
      if (currentCount >= maxRequests) {
        return false;
      }

      await storage.incrementRateLimit(clientId, identifier);
      return true;
    } catch (error) {
      console.error('Rate limit check error:', error);
      return false;
    }
  }

  /**
   * Comprehensive security validation
   */
  static async validateRequest(req: Request, appId: string): Promise<SecurityValidationResult> {
    try {
      // Get client configuration
      const client = await storage.getClientByAppId(appId);
      if (!client || !client.isActive) {
        return { isValid: false, error: "Invalid or inactive app ID" };
      }

      const origin = req.headers.origin;
      const referrer = req.headers.referer;
      const userIp = req.ip || req.connection.remoteAddress || 'unknown';

      // Check domain validation if required
      if (client.requireReferrerCheck && client.allowedDomains && client.allowedDomains.length > 0) {
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
      console.error('Security validation error:', error);
      return { isValid: false, error: "Security validation failed" };
    }
  }

  /**
   * Generate secure widget token (alternative to exposing app ID)
   */
  static generateWidgetToken(appId: string, domain: string, expiresIn: number = 3600): string {
    const payload = {
      appId,
      domain,
      exp: Math.floor(Date.now() / 1000) + expiresIn,
      iat: Math.floor(Date.now() / 1000)
    };

    // In production, use proper JWT signing
    return Buffer.from(JSON.stringify(payload)).toString('base64');
  }

  /**
   * Verify widget token
   */
  static verifyWidgetToken(token: string): { appId: string; domain: string } | null {
    try {
      const payload = JSON.parse(Buffer.from(token, 'base64').toString());
      
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        return null; // Token expired
      }

      return { appId: payload.appId, domain: payload.domain };
    } catch (error) {
      return null;
    }
  }
}