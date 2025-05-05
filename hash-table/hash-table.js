class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  find(key) {
    if (this.length == 0) return null;
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  add(key, value) {
    const newNode = new Node(key, value);

    if (this.length == 0) {
      this.head = newNode;
      this.length++;
      return;
    }

    const exiting = this.find(key);
    if (!exiting) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    } else {
      exiting.value = value;
      return;
    }
  }

  remove(key) {
    if (this.length == 0) return false;
    if (this.head.key === key) {
      this.head = null;
      this.length = 0;
      return true;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.key === key) {
        prev.next = current.next;
        this.length--;
        return true;
      }
      current = current.next;
      prev = current;
    }

    return false;
  }

  *entries() {
    let current = this.head;
    while (current) {
      yield [current.key, current.value];
      current = current.next;
    }
  }
}

class HashTable {
  #keys;
  constructor() {
    this.size = 10;
    this.table = new Array(this.size);
    this.#keys = new Set();
    this.length = 0;
  }

  // Better hash function
  #hash(key, size = this.size) {
    let hash = 5381;
    for (let ch of key) {
      hash = (hash * 33) ^ ch.charCodeAt(0);
    }
    return Math.abs(hash) % size;
  }

  #resize() {
    let newSize;
    if (this.length / this.size > 0.75) {
      newSize = this.size * 2;
    }

    if (newSize) {
      const oldTable = this.table;
      this.size = newSize;
      this.count = 0;
      this.table = new Array(newSize);

      for (const list of oldTable) {
        if (list) {
          for (const [key, value] of list.entries()) {
            this.set(key, value);
          }
        }
      }
    }
    return false;
  }

  #findByKey(key) {
    if (this.length == 0) return null;
    const index = this.#hash(key);
    const bucket = this.table[index];

    if (bucket) return bucket.find(key);
    return null;
  }

  get(key) {
    return this.#findByKey(key);
  }

  set(key, value) {
    this.#resize();

    const index = this.#hash(key);
    if (!this.table[index]) this.table[index] = new LinkedList();

    let bucket = this.table[index];
    let existing = bucket.find(key);
    if (!existing) {
      this.length++;
      this.#keys.add(key);
    }
    bucket.add(key, value);
  }

  remove() {}

  clear() {
    this.size = 10;
    this.table = new Array(this.size);
    this.length = 0;
    this.#keys = new Set();
  }

  has(key) {
    return !!this.#findByKey(key);
  }

  keys() {
    return Array.from(this.#keys);
  }

  values() {
    const values = [];
    for (const list of this.table) {
      if (list) {
        for (let [_, value] of list.entries()) {
          values.push(value);
        }
      }
    }
    return values;
  }

  entries() {
    const all = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let entry of bucket.entries()) {
          all.push(entry);
        }
      }
    }
    return all;
  }
}

const hashTable = new HashTable();
hashTable.set("name", "Munira");
hashTable.set("age", "10 years");
hashTable.set("location", "24 killington Cresent");
hashTable.set("location2", "24 killington Cresent");
hashTable.set("location3", "24 killington Cresent");
hashTable.set("location4", "24 killington Cresent");

console.log(hashTable, hashTable.entries());
