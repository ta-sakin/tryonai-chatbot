import { NhostClient } from "@nhost/nhost-js";

// Admin client for server-side operations
export const nhost = new NhostClient({
  subdomain: process.env.NHOST_SUBDOMAIN || "localhost",
  region: process.env.NHOST_REGION || "local",
  adminSecret: process.env.NHOST_ADMIN_SECRET || "nhost-admin-secret",
});
