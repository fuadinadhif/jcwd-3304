"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Redirect ke halaman home "/"
    router.push("/");
  }

  return (
    <main className="grid min-h-screen place-items-center">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="username">Username</label>
          <input
            className="border border-white"
            type="text"
            id="username"
            placeholder="Type your username"
          />
        </div>
        <div className="grid">
          <label htmlFor="password">Password</label>
          <input
            className="border border-white"
            type="password"
            id="password"
            placeholder="Type you password "
          />
        </div>
        <button type="submit" className="bg-white w-full text-black">
          Submit
        </button>
      </form>
    </main>
  );
}
