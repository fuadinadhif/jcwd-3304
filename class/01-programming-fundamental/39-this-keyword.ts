const voterProfile = {
  name: "Anies Baswedan",
  age: 60,
  address: {
    street: "Some Street",
    province: "Some Province",
    showThis() {
      return this;
    },
  },
  showThis() {
    return this;
  },
};

console.log(this);
console.log(voterProfile.showThis());
console.log(voterProfile.address.showThis());
