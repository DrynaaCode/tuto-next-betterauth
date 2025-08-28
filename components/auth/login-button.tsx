"use client";

import { authClient } from "@/lib/auth-client";

export const SignInButton = () => {

    const signInWithGithub = async() =>{
        await authClient.signIn.social({
            provider: "github",
            callbackURL:'/'
        })
    }

    const signInWithGoogle = async() =>{
        await authClient.signIn.social({
            provider: "google",
            callbackURL:'/'
        })
    }
    return (
        <div className="mt-6 flex flex-col gap-3">
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-200 transition bg-white text-gray-800 font-semibold"
                onClick={signInWithGithub}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.089 2.91.833.091-.647.35-1.09.636-1.341-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 7.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.339-.012 2.421-.012 2.75 0 .268.18.579.688.481C19.138 20.19 22 16.436 22 12.012 22 6.484 17.523 2 12 2z" fill="#181717" /></svg>
                Login with GitHub
            </button>
            <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-200 transition bg-white text-gray-800 font-semibold"
                onClick={signInWithGoogle}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M21.6 12.227c0-.818-.073-1.604-.209-2.364H12v4.482h5.352a4.577 4.577 0 0 1-1.98 3.004v2.497h3.192c1.87-1.723 2.936-4.263 2.936-7.619z" fill="#4285F4" /><path d="M12 22c2.43 0 4.468-.805 5.957-2.188l-3.192-2.497c-.885.594-2.017.946-3.265.946-2.513 0-4.64-1.698-5.401-3.984H2.8v2.522A9.997 9.997 0 0 0 12 22z" fill="#34A853" /><path d="M6.599 14.277A5.996 5.996 0 0 1 6.09 12c0-.792.142-1.56.393-2.277V7.201H2.8A9.997 9.997 0 0 0 2 12c0 1.604.385 3.123 1.062 4.445l3.537-2.168z" fill="#FBBC05" /><path d="M12 6.917c1.322 0 2.504.455 3.436 1.348l2.573-2.573C16.464 4.805 14.426 4 12 4A9.997 9.997 0 0 0 2.8 7.201l3.683 2.522C7.36 8.615 9.487 6.917 12 6.917z" fill="#EA4335" /></g></svg>
                Login with Google
            </button>
        </div>
    )
}