//1. default export
//- hanya boleh ada satu di dalam satu file

//2. named export
//- boleh lebih dari satu kali

//default
export default function greetingOne(name: string): string {
  return `Hello ${name}`;
}


//named
export function greetingTwo(name: string): string {
    return `Om swastiastu, ${name}`;
}
export const a = 10

console.log(greetingOne("John Doe"));
console.log(greetingTwo("nyoman"));
