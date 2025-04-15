"use client";

import Children from "./children";
import React, { useContext } from "react";
import { FamilyContext } from "@/contexts/family-context";

export default function Parent(props: { children: React.ReactNode }) {
  const familyProfile = useContext(FamilyContext);
  return (
    <div className="p-5 border parent">
      <p>Parent: {familyProfile?.parent}</p>
      <p>{props.children}</p>
      <Children />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// 1. export default function Parent(props: { children: React.ReactNode }) {}
// <div>{props.children}</div>
// 2. export default function Parent({children}: { children: React.ReactNode }) {}
// <div>{childrend}</div>

// Destructure
// const profile = { name: "John", age: 10 };
// const name = profile.name;
// const age = profile.age;
// const { name, age } = profile;
