class ArrayQueue {
  constructor(capacity = 10) {
    this.queue = new Array(10);
    this.length = 0;
    this.front = 0;
    this.rear = 0;
    this.capacity = capacity;
  }

  //[0,1,2,3]
  enqueue(data) {
    if (this.length >= this.capacity) throw new Error("Queue is full");
    this.queue[this.rear] = data;
    this.rear = (this.rear + 1) % this.capacity;
    this.length++;
    return;
  }

  dequeue() {
    if (this.length == 0) throw new Error("Queue is empty");
    const value = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
    console.log("dequeue", value);
    this.length--;
    return value;
  }

  peek() {
    return this.queue[this.front] ?? null;
  }
}

const queue = new ArrayQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(9);
// queue.enqueue(10);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(11);
queue.enqueue(12);
console.log(queue);
