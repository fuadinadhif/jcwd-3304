const person = {
  name: "Nicholas Saputra",
  age: 40,
  address: {
    street: "Jalan Rangga",
    city: "Jakarta Selatan",
    province: "DKI",
  },
};

console.log(person.age);
console.log(person["name"]);
console.log(person.address.province);
console.log(person.height);
console.log(person.education);
console.log(person.education?.elementary);
console.log(person.education?.["junior"]);
