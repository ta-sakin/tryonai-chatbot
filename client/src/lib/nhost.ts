import { NhostClient } from "@nhost/nhost-js";
console.log(
  "import.meta.env.VITE_NHOST_SUBDOMAIN",
  import.meta.env.VITE_NHOST_SUBDOMAIN
);
export const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
  autoRefreshToken: true,
  autoSignIn: true,
});
