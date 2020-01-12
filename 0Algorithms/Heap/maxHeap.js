class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(item) {
		this.values.push(item);

		this.bubbleUp();

		return this.values;
	}
	bubbleUp(index = this.values.length - 1) {
		const parentIndex = Math.floor((index - 1) / 2);

		while (this.values[parentIndex] < this.values[index]) {
			if (this.values[parentIndex] < this.values[index]) {
				[ this.values[parentIndex], this.values[index] ] = [ this.values[index], this.values[parentIndex] ];

				index = parentIndex;

				this.bubbleUp(index);
			}

			return;
		}
	}
	findParent(index = this.values.length - 1) {
		const result = Math.floor((index - 1) / 2);

		return result;
	}
}

const mx = new MaxBinaryHeap();

mx.insert(100);
console.log(mx.values);
mx.insert(200);
console.log(mx.values);
mx.insert(300);
console.log(mx.values);
mx.insert(400);
console.log(mx.values);
