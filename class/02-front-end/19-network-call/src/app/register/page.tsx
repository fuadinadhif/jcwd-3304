"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://pallywaves-us.backendless.app/api/data/Users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        alert("Failed to create new user");
      } else {
        alert("New user created");
      }

      setFormData({ email: "", name: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Type your name"
            value={formData.name}
            onChange={(event) =>
              setFormData((prev) => {
                return {
                  name: event.target.value,
                  email: prev.email,
                  password: prev.password,
                };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Type your email"
            value={formData.email}
            onChange={(event) =>
              setFormData((prev) => {
                return {
                  name: prev.name,
                  email: event.target.value,
                  password: prev.password,
                };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            value={formData.password}
            onChange={(event) =>
              setFormData((prev) => {
                return {
                  name: prev.name,
                  email: prev.email,
                  password: event.target.value,
                };
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
