import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "https://development.exon.dev",
  plugins: [
    magicLinkClient()
  ]
});

// Export individual methods for convenience
export const { signIn, signOut, useSession, magicLink } = authClient; 