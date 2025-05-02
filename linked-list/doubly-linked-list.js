class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class ListUtils {
  static isValidIndexForInsert(index, length) {
    if (index < 0 || index > length) {
      throw new Error("Index out of bounds");
    } else {
      return true;
    }
  }

  static isValidIndexForRemove(index, length) {
    if (index < 0 || index > length - 1) {
      throw new Error("Index out of bounds");
    } else {
      return true;
    }
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // insert at tail
  append(data) {
    const newNode = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return;
  }

  // insert at head
  prepend(data) {
    const newNode = new Node(data);
    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  // insert at specific index
  insertAt(index, data) {
    ListUtils.isValidIndexForInsert(index);
    const newNode = new Node(data);
    let i = 0;
    let current = this.head;

    if (index == 0) {
      current.prev = newNode;
      newNode.next = current;
      this.head = newNode;
      this.length++;
      return;
    }

    if (index === this.length && index !== 0) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      return;
    }

    while (i < index - 1) {
      current = current.next;
      i++;
    }

    newNode.prev = current;
    newNode.next = current.next;

    current.next = newNode;
    current.next.prev = newNode;

    this.length++;
    return;
  }

  // remove by value
  remove(data) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.data !== data) {
        current = current.next;
        continue;
      }
      // {1,2} / {1,2,3}
      if (current === this.head && current === this.tail) {
        this.length = 0;
        this.head = null;
        this.tail = null;
        this.length--;
        return true;
      }

      if (current === this.head) {
        current.next.prev = null;
        this.head = current.next;
        this.length--;
        return true;
      }

      if (current === this.tail) {
        current.prev.next = null;
        this.tail = current.prev;
        this.length--;
        return true;
      }

      if (current.prev && current.prev.next) current.prev.next = current.next;
      if (current.next && current.next.prev) current.next.prev = current.prev;
      this.length--;
      return true;
    }

    return false;
  }

  // get total length of list
  getLength() {
    return this.length;
  }

  // check is list is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // convert list to array
  toArray() {
    const array = [];
    if (this.isEmpty()) return array;

    let current = this.head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  // convert list to string
  toString() {
    return this.toArray().join(" -> ");
  }
}

const list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(1);
list.remove(10);
list.remove(30);
list.insertAt(2, 30);
list.insertAt(0, -7);
list.insertAt(2, 10);
console.log(list.toString(), list.getLength());
