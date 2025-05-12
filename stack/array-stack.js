class ArrayStack {
  constructor(size = 100) {
    this.size = size;
    this.array = new Array(this.size);
    this.top = -1;
  }

  push(data) {
    if (this.top >= this.size) throw new Error("Stack overflow");
    this.array[this.top + 1] = data;
    this.top++;
    return;
  }

  pop() {
    if (this.top < 0) throw new Error("Stack underflow");
    const removedItem = this.array[this.top];
    this.top--;
    return removedItem;
  }

  peek() {
    return this.array[this.top];
  }
}

const arrayStack = new ArrayStack();
// arrayStack.pop();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
arrayStack.push(4);
arrayStack.push(5);
arrayStack.push(6);
arrayStack.push(7);
arrayStack.push(8);
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.pop();
arrayStack.push(10);
console.log(arrayStack.peek());
console.log(arrayStack);
