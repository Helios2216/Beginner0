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
		this.size = 0;
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
		return ++this.size;
	}
	dequeue() {
		if (!this.first) return null;

		const removed = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = this.first;
		} else {
			this.first = this.first.next;

			removed.next = null;
		}

		--this.size;
		return removed.value;
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
