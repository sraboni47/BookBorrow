"use client";

import { authClient } from "@/lib/auth-client";

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full"
    >
      Sign In With Google
    </button>
  );
}