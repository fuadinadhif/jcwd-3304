"use client";

import { useState } from "react";

export default function UseStateThirdPage() {
    const [firstName, setFirstName] = useState("Naufal")
    const [lastName, setLastName] = useState("Satria")
    const [email, setEmail] = useState("naufalsatria@mail.com")

    return (
        <main>
            <form>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </form>

            <p> {firstName} {lastName} {email} </p>
        </main>
    )
}