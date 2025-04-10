// 1. default export
// - Hanya boleh ada satu di dalam satu file

// 2. named export
// - Boleh lebih dari satu kali

// Default
export default function greetingOne(name: string): string {
  return `Hello ${name}`;
}

// Named
export function greetingTwo(name: string): string {
  return `Om swastiastu ${name}`;
}

export const a = 10;

// console.log(greetingOne("John Doe"));
// console.log(greetingTwo("Nyoman"));
