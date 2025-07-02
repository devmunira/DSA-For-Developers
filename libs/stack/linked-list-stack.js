class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor(capacity = 10) {
    this.top = null;
    this.size = 0;
    this.capacity = capacity;
  }

  push(data) {
    if (this.size >= this.capacity) throw new Error("Stack Overflow");
    const newNode = new Node(data);

    if (!this.top) {
      this.top = newNode;
      this.size++;
      return;
    }

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    return;
  }

  pop() {
    if (this.size <= 0) throw new Error("Stack underflow");

    const value = this.top;
    this.top = this.top.next ?? null;
    this.size--;
    return value;
  }

  peek() {
    return this.top ?? null;
  }
}

const linkedStack = new LinkedListStack();
linkedStack.push(10);
linkedStack.push(9);
linkedStack.push(8);
linkedStack.push(7);
linkedStack.pop();
linkedStack.pop();
linkedStack.pop();
linkedStack.pop();

console.log(JSON.stringify(linkedStack.top, null, 2));
