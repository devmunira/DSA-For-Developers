export class ArraySort {
  private array: number[];
  private size: number;

  constructor(size: number) {
    this.size = size;
    this.array = [];
    this.generateArrayByLength();
  }

  private generateArrayByLength() {
    for (let index = 0; index < this.size; index++) {
      this.array.push(Math.floor(Math.random() * 100) + 1);
    }
  }

  bubbleSortBadApproach() {
    if (this.array.length === 0) return [];
    const array = this.array;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    console.log(array, this.array);
  }

  bubbleSortOptimizedApproach() {
    if (this.array.length === 0) return [];
    const array = this.array;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    console.log(array, this.array);
  }
}
