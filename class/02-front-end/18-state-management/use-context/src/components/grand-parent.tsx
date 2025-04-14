"use client";

import Parent from "./parent";
import { useContext } from "react";
import { FamilyContext } from "@/contexts/family-context";

export default function GrandParent() {
  const familyProfile = useContext(FamilyContext);

  return (
    <div className="p-5 grand-parent border">
      <p>Grand Parent: {familyProfile?.grandParent}</p>
      <Parent />
    </div>
  );
}
