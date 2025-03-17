// 1.
class Employee {
  name: string;
  workingHours: number = 0;
  age: number;
  salary: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  addWorkingHours(hours: number) {
    // this.workingHours = this.workingHours + hours;
    this.workingHours += hours;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
  }

  calculateSalary() {
    if (this.workingHours > 6) {
      return this.workingHours * 75000;
    } else {
      return this.workingHours * 100000;
    }
  }
}

class PartTimeEmployee extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
  }

  calculateSalary() {
    if (this.workingHours > 6) {
      return this.workingHours * 30000;
    } else {
      return this.workingHours * 50000;
    }
  }
}

const zuhriFullTime = new FullTimeEmployee("Zuhri", 27);
const jordanPartTime = new PartTimeEmployee("Jordan", 26);

zuhriFullTime.addWorkingHours(10);
// zuhriFullTime.addWorkingHours(5);
jordanPartTime.addWorkingHours(3);

// console.log(zuhriFullTime);
// console.log(jordanPartTime);

// console.log(zuhriFullTime.calculateSalary());
// console.log(jordanPartTime.calculateSalary());

// 2.
class Player {
  name: string;
  health: number = 100;
  power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  damage(power: number) {
    this.health = this.health - power;
  }

  useItem(item: { health: number; power: number }) {
    this.health = this.health + item.health;
    this.power = this.power + item.power;
  }

  showStatus() {
    return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
  }
}

class ShootingGame {
  player1: { name: string; health: number; power: number };
  player2: { name: string; health: number; power: number };

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      health: Math.round(Math.random() * 100),
      power: Math.round(Math.random() * 50),
    };
  }

  start() {
    console.log("Game Start!");

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("\n");
      console.log("Before Getting Item:");

      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());

      console.log("\n");
      console.log("After Getting Item:");

      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());

      this.player1.damage(this.player2.power);
      this.player2.damage(this.player1.power);

      console.log("\n");
      console.log("After Shooting:");

      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
    }

    let winner = "";

    if (this.player1.health > 0) {
      winner = this.player1.name;
    } else {
      winner = this.player2.name;
    }

    console.log(`Winner: ${winner}`);
  }
}

const luffy = new Player("Monkey D. Luffy");
const ace = new Player("Ace");

const game = new ShootingGame(luffy, ace);

game.start();
