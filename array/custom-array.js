class CustomArray {
  constructor(capacity = 5, length = 0) {
    this.capacity = capacity;
    this.length = length;
    this.array = new Array(length);
  }

  isValidIndex(index) {
    // check index is valid or not
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
  }

  grow() {
    this.capacity *= 2;
  }

  insert(index, value) {
    // check capacity exceed or not.
    if (this.length > this.capacity / 2) {
      this.grow();
    }

    this.isValidIndex(index);

    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i - 1];
    }

    this.array[index] = value;
    this.length++;
  }

  remove(index) {
    this.isValidIndex(index);

    // check if last remove
    if (index == this.length) {
      this.length--;
      return;
    }

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
  }

  update(index, value) {
    this.isValidIndex();
    array[index] = value;
  }

  // add element on last index
  push(element) {
    // check capacity exceed or not.
    if (this.length > this.capacity / 2) {
      this.grow();
    }
    this.array[this.length] = element;
    this.length++;
  }

  // remove last element from array
  pop() {
    if (this.length <= 0) throw new Error("Array is empty");
    const element = this.array[this.length - 1];
    this.length--;

    return element;
  }

  get(index) {
    this.isValidIndex();
    return this.array[index];
  }

  indexOf(value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }

    return -1;
  }

  contains(element) {
    return this.indexOf(element) !== -1;
  }

  copy() {
    return this.array.slice(0, this.length);
  }

  toString() {
    return this.array.slice(0, this.length).join(",");
  }

  map(cb) {
    for (let index = 0; index < array.length; index++) {
      cb(this.array[index], index);
    }
  }
}

const array = new CustomArray();

array.insert(0, 1);
array.insert(0, 2);
array.insert(0, 3);
array.insert(0, 4);
array.remove(3);
array.push(100);

console.log(array.copy());
console.log(array.toString());
console.log(array);
