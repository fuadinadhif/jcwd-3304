"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      alert("Login success");

      setLoginData({ username: "", password: "" });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="username">Username</label>
            <input
              className="border border-black"
              type="text"
              id="username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData((prev) => {
                  return { ...prev, username: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="password">Password</label>
            <input
              className="border border-black"
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
          </div>

          <button className="bg-black text-white" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
