"use client";

import { useContext } from "react";
import { FamilyContext } from "@/contexts/family-context";

export default function GrandChildren() {
  const familyProfile = useContext(FamilyContext);

  return (
    <div className="p-5 border grand-children">
      <p>Grand Children: {familyProfile?.grandChildren}</p>
    </div>
  );
}
