// layout.tsx ou page.tsx (Server Component)
import { getSession } from "@/lib/server-session";
import { NavUser } from "@/components/nav-user";

export default async function Layout({ children }) {
  const session = await getSession();
  return (
    <>
      {session?.user && (
        <NavUser user={{
          name: session.user.name,
          email: session.user.email,
          avatar: session.user.image ?? "",
        }} />
      )}
      {children}
    </>
  );
}