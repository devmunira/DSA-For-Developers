class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedQueue {
  constructor(capacity = 10) {
    this.length = 0;
    this.front = null;
    this.rear = null;
    this.capacity = capacity;
  }

  enqueue(data) {
    if (this.length >= this.capacity) throw new Error("Queue is full");
    const newNode = new Node(data);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.length++;
    return;
  }

  dequeue() {
    if (this.length == 0) throw new Error("Queue is empty");
    this.front = this.front.next;
    this.length--;
    return value;
  }

  peek() {
    return this.queue[this.front] ?? null;
  }
}
