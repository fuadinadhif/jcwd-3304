"use client";

import React, { createContext } from "react";

interface FamilyProfile {
  grandParent: string;
  parent: string;
  children: string;
  grandChildren: string;
}

export const FamilyContext = createContext<FamilyProfile | undefined>(
  undefined
);

export default function FamilyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const familyProfile = {
    grandParent: "Alfin",
    parent: "Syatori",
    children: "Nahla",
    grandChildren: "Keysha",
  };

  return (
    <FamilyContext.Provider value={familyProfile}>
      {children}
    </FamilyContext.Provider>
  );
}
