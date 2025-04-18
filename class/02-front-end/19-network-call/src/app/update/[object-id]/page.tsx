"use client";

import React, { useState, useEffect } from "react";

export default function RandomPage(props: {
  params: Promise<{ "object-id": string }>;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function getUserData() {
      const objectId = (await props.params)["object-id"];

      try {
        const res = await fetch(
          `https://pallywaves-us.backendless.app/api/data/Users/${objectId}`
        );
        const data = await res.json();
        setFormData({
          name: data.name,
          email: data.email,
        });
      } catch (error) {
        console.error(error);
      }
    }

    getUserData();
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      const objectId = (await props.params)["object-id"];
      const res = await fetch(
        `https://pallywaves-us.backendless.app/api/data/Users/${objectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        alert("Update user data has been failed");
      } else {
        alert("Successfully update user data");
      }
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
