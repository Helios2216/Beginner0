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

cmx.courseVersion(41);
cmx.courseVersion(39);
cmx.courseVersion(33);
cmx.courseVersion(18);
cmx.courseVersion(27);
cmx.courseVersion(12);
cmx.courseVersion(55);
cmx.courseVersion(1);
cmx.courseVersion(45);
cmx.courseVersion(199);

console.log(mx.values);
console.log(cmx.values);
// console.log(mx.findParent());
// console.log(mx.showChildren(4));
// console.log(mx.showChildren(2));
