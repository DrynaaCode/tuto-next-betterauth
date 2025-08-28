import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";


export const auth = betterAuth({
database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
    schema
  }),
  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    // Add more pages as needed
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});



// ⚠️ N'utilisez pas getSession ici côté client !
// Utilisez la fonction getSession dans 'lib/server-session.ts' pour les Server Components ou API routes.

