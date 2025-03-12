class Creature {}
class Animal extends Creature {}
class Rabbit extends Animal {}
class Tree extends Creature {}
class Mahoni extends Tree {}

const rabbit = new Rabbit();
const mahoni = new Mahoni();
const randomAnimal = new Animal();
const randomTree = new Tree();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Mahoni);
console.log(randomTree instanceof Mahoni);
console.log(randomTree instanceof Tree);
console.log(randomAnimal instanceof Tree);
console.log(randomAnimal instanceof Creature);
console.log(rabbit instanceof Creature);
