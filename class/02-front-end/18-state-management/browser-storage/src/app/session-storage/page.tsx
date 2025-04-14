"use client";

import { useEffect, useState } from "react";

export default function SessionStoragePage() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ name: "", username: "" });

  useEffect(() => {
    const formSaved = sessionStorage.getItem("formData");

    if (formSaved) {
      setFormData(JSON.parse(formSaved));
    }
  }, []);

  return (
    <main className="min-h-screen grid place-items-center">
      <form className="grid">
        <div className="grid text-white">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => {
                return { name: e.target.value, username: prev.username };
              });
              sessionStorage.setItem(
                "formData",
                JSON.stringify({
                  name: e.target.value,
                  username: formData.username,
                })
              );
            }}
            className="border border-white text-white"
            type="text"
          />
        </div>
        <div className="grid text-white">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className="border border-white text-white"
            type="text"
            value={formData.username}
            onChange={(e) => {
              // setFormData({ name: "", username: e.target.value })
              setFormData((prev) => {
                return { name: prev.name, username: e.target.value };
              });
              sessionStorage.setItem(
                "formData",
                JSON.stringify({
                  name: formData.name,
                  username: e.target.value,
                })
              );
            }}
          />
        </div>
        <button type="submit" className="bg-white">
          Submit
        </button>
      </form>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
{
  /* <div className="grid text-white">
  <label htmlFor="email">Email</label>
  <input
    id="email"
    className="border border-white text-white"
    type="email"
  />
</div>
<div className="grid text-white">
  <label htmlFor="password">Password</label>
  <input
    id="password"
    className="border border-white text-white"
    type="password"
  />
</div>  */
}

/* ---------------------------- JSON vs Object JS --------------------------- */
// 1. JSON.parse()
// 2. JSON.stringify()
