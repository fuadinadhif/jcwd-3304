class Queue {
  #container: number[] = [];

  enqueue(element: number) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.showContainer());

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(500);

console.log(queue.showContainer());
