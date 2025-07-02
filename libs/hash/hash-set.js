import { HashTable } from "./hash-table.js";

class HashSet {
  constructor() {
    this.data = new HashTable();
    this.count = 0;
  }

  set(key) {
    if (this.data.has(key)) return;
    this.data.set(key, true);
    this.count++;
  }

  get(key) {
    return this.data.get(key);
  }

  size() {
    return this.count;
  }

  has(value) {
    return !!this.data.get(value);
  }

  values() {
    return this.data.keys();
  }

  commonElement(set) {
    const result = [];
    for (const value of this.data.values()) {
      if (set.has(value)) result.push(value);
    }
    return result;
  }
}

const set = new HashSet();
set.set("key1");
set.set("key2");
set.set("key3");
set.set("key4");
set.set("key5");
set.set("key6");
