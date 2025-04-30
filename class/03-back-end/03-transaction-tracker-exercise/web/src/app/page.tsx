"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getTransactionsData() {
      const res = await fetch("http://localhost:8000/api/v1/transactions");
      const data = await res.json();
      setTransactions(data);
    }

    getTransactionsData();
  }, []);

  async function handleDelete(id: string) {
    await fetch(`http://localhost:8000/api/v1/transactions/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <main className="min-h-screen grid place-items-center">
      <div>
        {transactions?.map((element) => {
          return (
            <article
              key={element.id}
              className="grid grid-cols-[1fr_auto_auto] gap-4"
            >
              <p>{element.title}</p>
              <span>{element.nominal}</span>
              <button
                className="cursor-pointer"
                onClick={() => handleDelete(element.id)}
              >
                Delete
              </button>
            </article>
          );
        })}
      </div>
    </main>
  );
}
