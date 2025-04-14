"use client";

import GrandChildren from "./grand-children";
import { useContext } from "react";
import { FamilyContext } from "@/contexts/family-context";

export default function Children() {
  const familyProfile = useContext(FamilyContext);
  return (
    <div className="p-5 border children">
      <p>Children: {familyProfile?.children}</p>
      <GrandChildren />
    </div>
  );
}
