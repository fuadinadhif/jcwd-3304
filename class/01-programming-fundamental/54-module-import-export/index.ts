// import [module_name] from "[file_path]"
import greetingAja from "./greetings";
import { greetingTwo, a } from "./greetings";

// 1. Import default
// - Tidak perlu pakai kurung kurawal
// - Namanya boleh diganti

// 2. Import named
// - Harus pakai kurung kurawal
// - Namanya harus sama persis

console.log(greetingAja("John Doe"));
console.log(greetingTwo("Nyoman"));
console.log(a);
