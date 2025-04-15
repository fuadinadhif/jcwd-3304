"use client";

import { useState, useEffect } from "react";

export default function RandomPage(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    async function getUserData() {
      const objectId = await props.params["object-id"];

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

  function handleSubmit() {}

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
