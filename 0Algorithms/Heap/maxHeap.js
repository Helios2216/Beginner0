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

		while (this.values[parentIndex] <= this.values[index]) {
			if (this.values[parentIndex] <= this.values[index]) {
				[ this.values[parentIndex], this.values[index] ] = [ this.values[index], this.values[parentIndex] ];

				index = parentIndex;

				this.bubbleUp(index);
			}

			return;
		}
	}
	extractMax() {
		const removed = this.values[0];

		const popLast = this.values.pop();
		this.values[0] = popLast;

		this.bubbleDown();

		return removed;
	}
	bubbleDown(index = 0) {
		let m;
		while (index * 2 + 1 < this.values.length - 1) {
			let leftChild = this.values[index * 2 + 1];
			let rightChild = this.values[index * 2 + 2];

			if (this.values[index] < leftChild) {
				if (leftChild >= rightChild) {
					[ this.values[index], this.values[index * 2 + 1] ] = [
						this.values[index * 2 + 1],
						this.values[index]
					];

					m = 1;
				}
			}

			if (this.values[index] < rightChild) {
				if (rightChild > leftChild) {
					[ this.values[index], this.values[index * 2 + 2] ] = [
						this.values[index * 2 + 2],
						this.values[index]
					];

					m = 2;
				}
			}

			if (this.values[index] > leftChild && this.values[index] > rightChild) return;

			if (rightChild !== undefined && leftChild !== undefined) {
				this.bubbleDown(index * 2 + m);
			}
		}
		return;
	}
	courseExtractmax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;

			this.courseSinkDown();
		}

		console.log(this.values);
		return max;
	}
	courseSinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];

				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];

				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;

			idx = swap;
		}
	}
	courseVersion(element) {
		this.values.push(element);
		this.courseBubbleUp();
	}
	courseBubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];

		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	findParent(index = this.values.length - 1) {
		const result = Math.floor((index - 1) / 2);

		return this.values[result];
	}
	showChildren(index = 0) {
		return [ this.values[index * 2 + 1], this.values[index * 2 + 2] ];
	}
}

const mx = new MaxBinaryHeap();
const cmx = new MaxBinaryHeap();

mx.insert(41);
mx.insert(39);
mx.insert(33);
mx.insert(18);
mx.insert(27);
mx.insert(12);
mx.insert(55);
mx.insert(1);
mx.insert(45);
mx.insert(199);

// cmx.courseVersion(41);
// cmx.courseVersion(39);
// cmx.courseVersion(33);
// cmx.courseVersion(18);
// cmx.courseVersion(27);
// cmx.courseVersion(12);
// cmx.courseVersion(55);
// cmx.courseVersion(1);
// cmx.courseVersion(45);
// cmx.courseVersion(199);

console.log(mx.extractMax());
//console.log(mx.courseExtractmax());

console.log(mx.values);
//console.log(cmx.values);
// console.log(mx.findParent());
// console.log(mx.showChildren(4));
// console.log(mx.showChildren(2));
