class MinBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(item) {
		this.values.push(item);

		this.bubbleUp();

		return this.values;
	}
	bubbleUp(index = this.values.length - 1) {
		const parent = Math.floor((index - 1) / 2);

		while (this.values[parent] >= this.values[index]) {
			this.values[parent] >= this.values[index] &&
				([ this.values[parent], this.values[index] ] = [ this.values[index], this.values[parent] ]);

			index = parent;

			this.bubbleUp(index);
		}

		return;
	}

	findParent(index = this.values.length - 1) {
		const result = Math.floor((index - 1) / 2);

		return this.values[result];
	}
	showChildren(index = 0) {
		return [ this.values[index * 2 + 1], this.values[index * 2 + 2] ];
	}
}

const mn = new MinBinaryHeap();

mn.insert(41);
mn.insert(39);
mn.insert(33);
mn.insert(18);
mn.insert(27);
mn.insert(12);
mn.insert(55);

console.log(mn.values);
//console.log(mn.findParent());
//console.log(mn.showChildren(3));
