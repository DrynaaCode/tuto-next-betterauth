"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
    const router = useRouter();
    const signOut = async () => await authClient.signOut({
        fetchOptions: {
            onSuccess:()=>router.push("/login")
        }
    });

    return (
        <button onClick={signOut}>
            Sign Out
        </button>
    );
};
