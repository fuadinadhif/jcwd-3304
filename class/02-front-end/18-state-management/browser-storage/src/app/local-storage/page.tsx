"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocalStoragePage() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Membuat state isDarkMode yang fungsinya untuk melacak status mode halaman kita

  useEffect(() => {
    const mode = localStorage.getItem("mode"); // Mengambil value mode dari localStorage
    setIsDarkMode(mode === "dark" ? true : false); // Untuk menyeleraskan state isDarkMode dengan value mode di localStorage
    document.documentElement.className = mode === "dark" ? "dark" : ""; // Mengubah class di dalam tag <html className="dark" > | <html className="">
  }, []);

  return (
    <main className="min-h-screen grid justify-items-center items-center">
      <button
        onClick={() => {
          const newMode = !isDarkMode;
          setIsDarkMode(newMode);
          document.documentElement.className = newMode ? "dark" : "";
          localStorage.setItem("mode", `${newMode ? "dark" : "light"}`);
        }}
      >
        {isDarkMode ? (
          <Moon size={50} className="text-white" />
        ) : (
          <Sun size={50} />
        )}
      </button>
    </main>
  );
}
