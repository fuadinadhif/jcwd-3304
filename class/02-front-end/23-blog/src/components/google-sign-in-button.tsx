"use client";

import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return <button onClick={() => signIn("google")}>Continue With Google</button>;
}
