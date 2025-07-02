const DEFAULT_CAPACITY = 50;

class SortedArray {
  constructor() {
    this.capacity = DEFAULT_CAPACITY;
    this.length = 0;
    this.array = new Array(this.capacity);
  }

  #resize(newSize) {
    if (newSize === this.capacity) return;

    const newArray = new Array(newSize);
    for (let index = 0; index < this.length; index++) {
      newArray[index] = this.array[index];
    }

    this.array = newArray;
    this.capacity = newSize;
  }

  #grow() {
    if (this.length < this.capacity / 2) return;
    this.#resize(this.capacity * 2);
  }

  #shrink() {
    if (this.length < this.capacity / 4) this.#resize(this.capacity / 2);
  }

  #isValidIndex(index) {
    if (index < 0 || index > this.length)
      throw new Error("Index out of bounds");
  }

  #isValidNumber(element) {
    if (typeof element !== "number")
      throw new Error("Sorted element must be a number type: " + element);
  }

  //   [-1,3,4] = 3
  insert(element) {
    this.#isValidNumber(element);

    this.#grow();

    this.array[this.length] = element;
    for (let index = this.length; index > 0; index--) {
      if (this.array[index] <= this.array[index - 1]) {
        const temp = this.array[index];
        this.array[index] = this.array[index - 1];
        this.array[index - 1] = temp;
      }
    }
    this.length++;
  }

  remove(index) {
    this.#isValidIndex(index);
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;
    this.#shrink();
  }

  get(index) {
    this.#isValidNumber(index);
    return this.array[index];
  }

  update(index, element) {
    this.#isValidIndex(index);
    this.#isValidNumber(element);

    if (this.array[index] === element) return;

    this.array[index] = element;
    if (this.array[index] > this.array[index + 1]) {
      // sorted to right
      for (let i = index; i < this.length; i++) {
        if (this.array[i] >= this.array[i + 1]) {
          const temp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = temp;
        }
      }
    }

    if (this.array[index] < this.array[index - 1]) {
      // sorted to left
      for (let i = index; i > 0; i--) {
        if (this.array[i] <= this.array[i - 1]) {
          const temp = this.array[i];
          this.array[i] = this.array[i - 1];
          this.array[i - 1] = temp;
        }
      }
    }
  }

  clear() {
    this.length = 0;
    this.capacity = DEFAULT_CAPACITY;
    this.array = new Array(this.capacity);
  }

  clone() {
    const newArray = this.array.slice(0, this.length);
    return newArray;
  }

  toString() {
    const newArray = this.array.slice(0, this.length).join(",");
    return newArray;
  }

  search(element) {
    let left = 0;
    let right = this.length - 1;
    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      if (this.array[middle] == element) return middle;
      else if (element > this.array[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  }
}

const sortedArray = new SortedArray();
sortedArray.insert(10);
sortedArray.insert(20);
sortedArray.insert(30);
sortedArray.insert(1);
sortedArray.insert(100);
sortedArray.insert(-100);
// console.log(sortedArray.get(2));
console.log({ prev: sortedArray.array });
sortedArray.remove(2);
console.log({ afterDelete: sortedArray.array });
sortedArray.update(3, 30);
console.log({ search: sortedArray.search(30) });
console.log({ afterUpdate: sortedArray });
