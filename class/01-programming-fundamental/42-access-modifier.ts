/* -------------------------------------------------------------------------- */
/*                         Public & Private Properties                        */
/* -------------------------------------------------------------------------- */
class User {
  // public
  name: string;
  bio: string;

  // private
  #id: number;
  #phone: string;

  constructor(name: string, bio: string, id: number, phone: string) {
    this.name = name;
    this.bio = bio;
    this.#id = id;
    this.#phone = phone;
  }

  getId() {
    return this.#id;
  }

  getPhone() {
    return this.#phone;
  }
}

const alfianUser = new User("Alfian", "Empty", 2219, "+628511702");

console.log(alfianUser.name);
console.log(alfianUser.bio);
// console.log(alfianUser.id);
// console.log(alfianUser.phone);
// console.log(alfianUser.#id);
// console.log(alfianUser.#phone);
console.log(alfianUser.getId());
console.log(alfianUser.getPhone());
