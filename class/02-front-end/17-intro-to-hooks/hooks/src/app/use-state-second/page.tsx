"use client";

import { useState } from "react";

export default function UseStateSecondPage() {
  const [name, setName] = useState("Andika");
  const [inputName, setInputName] = useState("");

  return (
    <main>
      <p>Hello, {name}</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setName(inputName);
          setInputName("");
        }}
      >
        <input
          type="text"
          placeholder="Input your name here.."
          value={inputName}
          onChange={(event) => {
            setInputName(event.target.value);
            setName(event.target.value);
            // console.log(event);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Input - attribut value = Menentukan isi dari input
// Input - onChange = Event listener yang akan berjalan setiap ada perubahan yang terjadi di dalam inputnya
