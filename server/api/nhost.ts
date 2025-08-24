import { NhostClient } from "@nhost/nhost-js";
import "dotenv/config";

export const nhost = new NhostClient({
  subdomain: process.env.NHOST_SUBDOMAIN,
  region: process.env.NHOST_REGION,
});
