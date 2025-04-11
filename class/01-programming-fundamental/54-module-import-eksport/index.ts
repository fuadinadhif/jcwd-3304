/* -------------------------------------------------------------------------- */
/*                                how to import                               */
/* -------------------------------------------------------------------------- */

// import [module_name] from "[File path]"

import greetingAja from "./greetings.ts";


import { greetingTwo,a } from "./greetings.ts";

//1. import default
// tidak perlu pakai kurung kurawal
// namanya boleh diganti

//2. import named
// perlu pakai kurung kurawal
// nama harus sama persis

console.log(greetingAja("John doe"));
console.log(greetingTwo("nyoman"));
console.log(a);
