"use client";

import Children from "./children";
import { useContext } from "react";
import { FamilyContext } from "@/contexts/family-context";

export default function Parent() {
  const familyProfile = useContext(FamilyContext);
  return (
    <div className="p-5 border parent">
      <p>Parent: {familyProfile?.parent}</p>
      <Children />
    </div>
  );
}
