/* -------------------------------------------------------------------------- */
/*                                First Example                               */
/* -------------------------------------------------------------------------- */
class Customer {
  firstName: string;
  lastName: string;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get fullName() {
    // return this.firstName + " " + this.lastName
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const splittedValue: string[] = value.split(" ");
    this.firstName = splittedValue[0];
    this.lastName = splittedValue[1];
  }
}

const customerOne = new Customer();
console.log(customerOne.firstName);
console.log(customerOne.fullName);

customerOne.fullName = "Farhan Harahap";

console.log(customerOne.firstName);
console.log(customerOne.fullName);
console.log(customerOne.getFullName());

/* -------------------------------------------------------------------------- */
/*                               Second Example                               */
/* -------------------------------------------------------------------------- */
class TemperatureConverter {
  celcius: number;

  constructor(celcius: number) {
    this.celcius = celcius;
  }

  get celciusDegree() {
    if (this.celcius < -273.15) {
      this.celcius = "Absolute zero!";
      return this.celcius;
    } else {
      return this.celcius;
    }
  }

  get fahreHeitDegree() {
    return (this.celcius * 9) / 5 + 32;
  }

  set celciusDegree(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero!");
    }
    this.celcius = value;
  }
}

const temp = new TemperatureConverter(36);
console.log(temp.celcius);

temp.celcius = 1000;
temp.celcius = -100;
// temp.celciusDegree = 50;
// temp.celciusDegree = -500;

console.log(temp.celcius);
console.log(temp.celciusDegree);

/* ---------------------------------- NOTE ---------------------------------- */
const studentOne = "Angel";
const studentTwo = "Bowo";

console.log("${studentOne} dan ${studentTwo}");
console.log("{studentOne} dan {studentTwo}");
console.log(`${studentOne} dan ${studentTwo}`);
console.log(`$studentOne dan $studentTwo`);
console.log(`{studentOne} dan {studentTwo}`);

// console.log(studentOne.some.some)
// throw new Error("Cannot read properties of undefined...")

function someFunc() {}
