class Node {
  constructor(data, next) {
    this.node = data;
    this.next = next || null;
  }
}

class LinkedListUtils {
  static isValidIndex(index) {
    // check index is valid or not
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.linkedListUtils = LinkedListUtils;
  }

  append(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  insert(index, data) {
    this.linkedListUtils.isValidIndex(index);
    if (index === 0) return this.prepend(data);
    else if (index === this.size) return this.append(data);
    else {
      const newNode = new Node(data);
      let i = 0;
      let current = this.head;
      let prev = null;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      prev.next = newNode;
      newNode.next = current;
      this.size++;
    }
  }

  removeByIndex(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Index out of bounds");
    }
    let removedNode;
    if (index == 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) this.tail = null;
    } else {
      let i = 0;
      let current = this.head;
      let prev = null;

      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      removedNode = current;
      prev.next = current.next;
      if (!current.next) this.tail = prev;
    }

    this.size--;
    return removedNode.data;
  }

  removeByValue(value) {
    if (!this.head) return null;

    if (this.head.data === value) {
      const removedNode = this.head;
      this.head = this.head.next;
      if (this.size === 1) this.tail = null;
      this.size--;
      return removedNode.data;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.data === value) {
        prev.next = current.next;
        if (!current.next) this.tail = prev;
        this.size--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `${current.node} ${current.next ? "-> " : ""}`;
      current = current.next;
    }

    return result;
  }

  update(index, data) {}

  get(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Index out of bounds");
    }

    let i = 0;
    let current = this.head;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current.node;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.node);
      current = current.next;
    }
    return result;
  }
}

const singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList);
singlyLinkedList.prepend(10);
singlyLinkedList.prepend(20);
singlyLinkedList.prepend(30);
singlyLinkedList.append(5);
console.log(singlyLinkedList.toString());
singlyLinkedList.insert(0, 1);
console.log(singlyLinkedList.toString(), singlyLinkedList.size);
singlyLinkedList.insert(2, 2);
singlyLinkedList.removeByIndex(0);
console.log(singlyLinkedList.toString());
singlyLinkedList.removeByIndex(1);
console.log(singlyLinkedList.toString());
singlyLinkedList.removeByIndex(2);
console.log(singlyLinkedList.toString());
console.log(singlyLinkedList.get(2));
console.log(singlyLinkedList.toArray());
