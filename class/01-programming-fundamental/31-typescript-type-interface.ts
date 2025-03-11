/* ------------------------------ Regular Types ----------------------------- */
const age: number = 70;
let fullName: string = "Jokowi";
const employeeProfile: { name: string; salary: number; gender: string } = {
  name: "Nahla",
  salary: 22000000,
  gender: "Female",
};

/* -------------------------------- Interface ------------------------------- */
// Kalau mau sebuah properti menjadi optional, boleh ada/tidak. Beri tanda tanya (?) di sebelah kanan key properti-nya
interface EmployeeProfileInterface {
  name: string;
  salary: number;
  gender?: string;
}

/* ---------------------------------- Type ---------------------------------- */
type EmployeeProfile = {
  name: string;
  salary: number;
  gender?: string;
};

const employeeProfile1: EmployeeProfileInterface = {
  name: "Suroyo",
  salary: 1000,
  gender: "Male",
};

const employeeProfile2: EmployeeProfileInterface = {
  name: "Joko",
  salary: 1000000,
  gender: "Male",
};

const employeeProfile3: EmployeeProfileInterface = {
  name: "Joko",
  salary: 1000000,
};
