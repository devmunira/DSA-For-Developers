import { ListUtils } from "./doubly-linked-list.js";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//  1 -> 1          3 -> 4 -> 1
// 1 -> 2 -> 3 -> 1
class CircularLinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  #insertAtHead(newNode) {
    this.head = newNode;
    this.tail = newNode;
    newNode.next = newNode;
  }

  #insertAtTail(newNode) {
    newNode.next = this.head;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.#insertAtHead(newNode);
    } else {
      this.#insertAtTail(newNode);
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.#insertAtHead(newNode);
    } else {
      const currentHead = this.head;
      this.head = newNode;
      newNode.next = currentHead;
      this.tail.next = this.head;
    }

    this.size++;
  }

  insert(index, data) {
    ListUtils.isValidIndexForInsert(index);
    const newNode = new Node(data);

    if (index === 0 && !this.#hasHead()) {
      this.#insertAtHead(newNode);
    } else if (index === 0 && this.#hasHead()) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    } else if (index === this.size) {
      this.#insertAtTail(newNode);
    } else {
      let current = this.findByIndex(index - 1);
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      }
    }
    this.size++;
  }

  findByIndex(index) {
    if (index < 0 || index >= this.size || !this.head) return null;

    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  }

  toArray() {
    if (!this.#hasHead()) return [];
    let current = this.head;
    const result = [];

    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    return result;
  }

  #hasHead() {
    return !!this.head;
  }
}

const list = new CircularLinkedList();
list.insert(0, 2);
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(4);
list.insert(3, 15);
list.insert(7, 50);
list.insert(0, 3);
console.log(list, list.toArray(), list.findByIndex(2));
