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
}

const dList = new DoublyLinkedList();

dList.push(1);
dList.push(2);
dList.push('TEST');

console.log(dList);
