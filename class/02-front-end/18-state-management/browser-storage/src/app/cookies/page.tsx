"use client";

import { useEffect, useState } from "react";

export default function CookiesPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    const cookies = document.cookie; // Mengambil semua cookie yang ada
    console.log(cookies);
    const username = cookies
      .split("; ")
      .find((item) => item.startsWith("token"));
    // Memotong string cookie menjadi sebuah array berdasarkan karakter semicolon

    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn === true) {
    return (
      <main className="min-h-screen grid place-items-center">
        <h1 className="text-3xl font-bold">Welcome, Farhan!</h1>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen grid place-items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Fungsi bawaan browser untuk menghalangi browser reload ketika form disubmit

            const timeNow = new Date().getTime();
            const expiresIn = 1000 * 60 * 60;
            const expiryTime = new Date(timeNow + expiresIn).toUTCString();

            document.cookie = `token=123ABCD; path:/; expires=${expiryTime};`;

            setFormData({ username: "", password: "" });
          }}
        >
          <div className="grid">
            <label htmlFor="username">Username</label>
            <input
              className="border border-black dark:border-white"
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((prev) => {
                  return { username: e.target.value, password: prev.password };
                })
              }
            />
          </div>
          <div className="grid">
            <label htmlFor="password">Password</label>
            <input
              className="border border-black dark:border-white"
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => {
                  return { username: prev.username, password: e.target.value };
                })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-black w-full dark:bg-white text-white dark:text-black"
          >
            Submit
          </button>
        </form>
      </main>
    );
  }
}
