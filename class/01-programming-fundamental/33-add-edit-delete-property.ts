interface PatientProfileInterface {
  name: string;
  height: number;
  weight: number;
  bloodType: string;
  age?: number;
  hobby?: string;
}

const patientProfile: PatientProfileInterface = {
  name: "Nadhif",
  height: 174,
  weight: 68,
  bloodType: "O",
};

// Add Property
console.log(patientProfile);

patientProfile.age = 27;
patientProfile["hobby"] = "Sleeping";

console.log(patientProfile);

// Edit Property
console.log(patientProfile);

patientProfile.age = 28;
patientProfile["name"] = "Fuad";

console.log(patientProfile);

// Delete Property
console.log(patientProfile);

delete patientProfile.age;
delete patientProfile["hobby"];

console.log(patientProfile);

/* ---------------------------------- NOTE ---------------------------------- */
// number -> 0 | 1 | 2
// number[] -> [1, 2, 3]
// string[] -> ["satu", "dua"]
