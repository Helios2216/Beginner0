class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	enqueue(value) {
		const node = new Node(value);
		if (!this.first) {
			this.first = node;
			this.last = this.first;
		} else {
			this.last.next = node;
			this.last = this.last.next;
		}
		return ++this.length;
	}
	dequeue() {
		if (!this.first) return null;

		const removed = this.first;

		if (this.length === 1) {
			this.first = null;
			this.last = this.first;
		} else {
			this.first = this.first.next;

			removed.next = null;
		}

		--this.length;
		return removed.value;
	}
}

module.exports = Queue;