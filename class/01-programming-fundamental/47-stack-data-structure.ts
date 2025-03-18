class Stack {
  #container: number[] = [];
  #maxSize: number;

  constructor(maxSize: number) {
    this.#maxSize = maxSize;
  }

  push(element: number) {
    if (this.isFull()) {
      return;
    }

    this.#container.push(element);
  }

  pop() {
    this.#container.pop();
  }

  isFull() {
    return this.#container.length >= this.#maxSize;
  }

  showContainer() {
    return this.#container;
  }
}

const stack1 = new Stack(3);
const stack2 = new Stack(5);

stack1.push(10);
stack1.push(5);
stack1.push(0);
console.log(stack1.isFull());
console.log(stack1.showContainer());

stack1.push(50);
stack1.push(500);
stack1.push(5000);
stack1.push(50000);
console.log(stack1.showContainer());

stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.showContainer());
