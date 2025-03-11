const user = {
  name: "John doe",
  greeting(): string {
    let name = "Teddy";
    return "Welcome!" + name;
  },
  greetingPerson(name: string): string {
    return "Welcome, " + name;
  },
};

console.log(user.greeting());
console.log(user.greeting("SBY"));
console.log(user.greeting);
console.log(user.greetingPerson("SBY"));
console.log(user.greetingPerson("Megawati"));
console.log(user.greetingPerson("Prabowo"));

/* ---------------------------------- Noted --------------------------------- */
[1, 2, 3].push(4);

const Array = {
  push() {},
};
