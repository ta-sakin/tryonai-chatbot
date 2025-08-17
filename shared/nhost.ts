import { NhostClient } from "@nhost/nhost-js";
import "dotenv/config";
export const nhost = new NhostClient({
  subdomain: process.env.VITE_NHOST_SUBDOMAIN,
  region: process.env.VITE_NHOST_REGION,
  autoRefreshToken: true,
  autoSignIn: true,
});
