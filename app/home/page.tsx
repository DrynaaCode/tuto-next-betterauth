import { SignOutButton } from "@/components/auth/signout-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSession } from "@/lib/server-session";
import { redirect } from "next/navigation";
import React from "react";

export default async function HomePage() {
    // Ajout d'un skeleton loader pendant le chargement de la session
    let session: Awaited<ReturnType<typeof getSession>> | null = null
    let loading = true
    try {
        session = await getSession()
        loading = false
    } catch {
        loading = false
    }
    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
                <Card className="w-full max-w-xl shadow-xl animate-pulse">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center bg-muted h-10 rounded" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-center text-lg mb-4 flex flex-col items-center gap-2">
                            <div className="rounded-full w-20 h-20 border bg-muted" />
                            <span className="block font-semibold text-blue-700 bg-muted h-6 w-32 rounded" />
                            <span className="block font-semibold text-blue-700 bg-muted h-6 w-40 rounded" />
                            <span className="block text-gray-500 text-sm bg-muted h-4 w-24 rounded" />
                        </div>
                        <div className="text-center text-lg mb-6 bg-muted h-8 w-full rounded" />
                        <div className="flex flex-col gap-4 items-center">
                            <div className="px-6 py-2 bg-muted rounded w-32" />
                            <div className="px-6 py-2 bg-muted rounded w-32" />
                            <div className="px-6 py-2 bg-muted rounded w-32" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
    if (!session) {
        redirect("/login")
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <Card className="w-full max-w-xl shadow-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center">Welcome to My App</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-lg mb-4 flex flex-col items-center gap-2">
                        {session?.user?.image && (
                            <img src={session.user.image} alt="Avatar" className="rounded-full w-20 h-20 border" />
                        )}
                        {session?.user?.name && (
                            <span className="block font-semibold text-blue-700">Name: {session.user.name}</span>
                        )}
                        {session?.user?.email && (
                            <span className="block font-semibold text-blue-700">Email: {session.user.email}</span>
                        )}
                        {session?.user?.createdAt && (
                            <span className="block text-gray-500 text-sm">Created: {new Date(session.user.createdAt).toLocaleString()}</span>
                        )}
                    </div>
                    <div className="text-center text-lg mb-6">
                        You are logged in! Enjoy exploring the features of this Next.js app with shadcn UI.
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <a href="/profile" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go to Profile</a>
                        <a href="/settings" className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Settings</a>
                        <SignOutButton />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

