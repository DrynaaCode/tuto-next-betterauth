
"use client";
import { SignInButton } from "@/components/auth/login-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { redirect } from "next/navigation";
import React from "react";

// Vérification de session côté client via une API route
// Utilisez un effet React pour vérifier la session et rediriger si besoin
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	// const router = useRouter();
	// useEffect(() => {
	// 	let isMounted = true;
	// 	fetch("/api/session")
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if (!isMounted) return;
	// 			if (data?.session) {
	// 				router.replace("/home");
	// 			}
	// 		})
	// 		.catch((err) => {
	// 			console.error("Erreur session:", err);
	// 		});
	// 	return () => { isMounted = false; };
	// }, [router]);
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-100">
				<Card className="w-full max-w-md shadow-lg">
					<CardHeader>
						<CardTitle>Login</CardTitle>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="email" className="w-full">
							<TabsList className="grid w-full grid-cols-2 mb-4">
								<TabsTrigger value="email">Email</TabsTrigger>
								<TabsTrigger value="username">Username</TabsTrigger>
							</TabsList>
							<TabsContent value="email">
								<form className="space-y-4">
									<div>
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" placeholder="Enter your email" required />
									</div>
									<div>
										<Label htmlFor="password">Password</Label>
										<Input id="password" type="password" placeholder="Enter your password" required />
									</div>
									<button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
								</form>
							</TabsContent>
							<TabsContent value="username">
								<form className="space-y-4">
									<div>
										<Label htmlFor="username">Username</Label>
										<Input id="username" type="text" placeholder="Enter your username" required />
									</div>
									<div>
										<Label htmlFor="password2">Password</Label>
										<Input id="password2" type="password" placeholder="Enter your password" required />
									</div>
									<button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
								</form>
							</TabsContent>
						</Tabs>
                        <SignInButton/>
					</CardContent>
				</Card>
			</div>
		);
}
