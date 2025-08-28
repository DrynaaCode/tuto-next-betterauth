import { auth } from "./auth";
import { headers } from "next/headers";

// Fonction à utiliser uniquement dans les Server Components ou API routes
export const getSession = async () => {
  return auth.api.getSession({
    headers: await headers(),
  });
};
