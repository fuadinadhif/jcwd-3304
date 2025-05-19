"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!res.ok) {
        throw new Error("Failed fetch");
      }

      setRegisterData({
        email: "",
        name: "",
        role: "",
        username: "",
        password: "",
      });

      alert("New user created!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid">
            <label htmlFor="name">Name</label>
            <input
              className="border border-black"
              type="text"
              id="name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="email">Email</label>
            <input
              className="border border-black"
              type="email"
              id="email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="username">Username</label>
            <input
              className="border border-black"
              type="text"
              id="username"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData((prev) => {
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
              value={registerData.password}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
            />
          </div>

          <div className="grid">
            <label htmlFor="role">Role</label>
            <input
              className="border border-black"
              type="text"
              id="role"
              value={registerData.role}
              onChange={(e) =>
                setRegisterData((prev) => {
                  return { ...prev, role: e.target.value };
                })
              }
            />
          </div>

          <button className="bg-black text-white" type="submit">
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
