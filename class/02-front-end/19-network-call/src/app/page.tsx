"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [allUserData, setAllUserData] = useState<
    { objectId: string; name: string }[]
  >([]);
  const [refresh, setRefresh] = useState(0);

  // 1. dot then
  // useEffect(() => {
  //   fetch("https://pallywaves-us.backendless.app/api/data/Users")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => setUserData(data))
  //     .catch((error) => console.error(error));
  // }, []);

  // 2. async/await
  useEffect(() => {
    async function getAllUserData() {
      try {
        const res = await fetch(
          "https://pallywaves-us.backendless.app/api/data/Users"
        );
        const data = await res.json();
        setAllUserData(data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllUserData();
  }, [refresh]);

  // allUserData.map((item) => console.log(item));

  async function handleDelete(objectId: string) {
    try {
      const res = await fetch(
        `https://pallywaves-us.backendless.app/api/data/Users/${objectId}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        alert("Failed to delete user data");
      } else {
        setAllUserData((prev) =>
          prev.filter((item) => item.objectId !== objectId)
        );
        alert("User has been deleted");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>Network Call</h1>
      {allUserData?.map((item) => (
        <div key={item.objectId} className="mb-5">
          <p>{item.name}</p>
          <Link
            href={`/update/${item.objectId}`}
            className="border border-white p-2"
          >
            Update
          </Link>
          <button
            className="border border-white p-2"
            onClick={() => handleDelete(item.objectId)}
          >
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => setRefresh(refresh + 1)}>Refresh User</button>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// function greeting() {
//   return new Promise((resolve, reject) =>
//     resolve("Greeting promise resolve!")
//   );
// }

// fetch("https://pallywaves-us.backendless.app/api/data/Users").then(
//   (res) => {
//     console.log(res.json());
//     console.log(greeting());
//   }
// );

// async function getUserData() {
//   try {
//     console.log(1);
//     console.log(2);
//     console.log(3);

//     throw new Error("Error suka-suka");

//     console.log(4);
//     console.log(5);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUserData();

{
  /* <p>Satu</p>
<p>Dua</p>
<p>Tiga</p>
{[<p>Satu</p>, <p>Dua</p>, <p>Tiga</p>]} */
}

// {[<p key={1}>Satu</p>, <p key={2}>Dua</p>, <p key={3}>Tiga</p>]}
