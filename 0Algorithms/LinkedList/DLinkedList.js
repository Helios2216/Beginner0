class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}

		this.length++;

		return this;
	}
	pop() {
		if (!this.head) return undefined;

		const oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		/* Course added similar below in single else statement minus decrement */

		this.tail = oldTail.prev;

		if (this.length > 1) {
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;

		return oldTail;
	}
	shift() {
		if (!this.head) return undefined;
		// somehow I chose the exact var name as instructor
		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}
}

const dList = new DoublyLinkedList();

dList.push(1);
dList.push(2);
dList.push(3);
dList.push(4);
console.log(dList);
