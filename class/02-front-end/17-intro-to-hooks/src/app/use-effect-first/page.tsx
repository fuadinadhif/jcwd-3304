"use client";

import { useState, useEffect } from "react";

export default function UseEffectFirstPage() {
  const [userList, setUserList] = useState<
    { name: string; username: string; email: string }[]
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(userList);

  return (
    <main>
      <h1>useEffect Hooks</h1>
      {/* <div>
        <p>{userList[0]?.name}</p>
        <p>{userList[0]?.email}</p>
        <p>{userList[0]?.username}</p>
      </div> */}
      {userList.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
      {[
        <div key={0}>Alfian</div>,
        <div key={1}>Naufal</div>,
        <div key={2}>Farhan</div>,
      ]}
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// useEffect kita pakai untuk sinkronisasi internal react dengan data eksternal (side effect)
