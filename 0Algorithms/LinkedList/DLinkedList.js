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
	unshift(value) {
		let node = new Node(value);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.length++;

		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;

		const mid = Math.floor(this.length / 2);

		let node;

		// > || >= one extra loop for index == middle
		if (index > mid) {
			node = this.traverse(index, this.tail);
		} else {
			node = this.traverse(index, this.head);
		}

		return node;
	}
	traverse(num, path) {
		let result = path;

		if (path === this.head) {
			for (let i = 0; i < num; i++) {
				result = result.next;
			}
		} else {
			for (let i = this.length - 1; i > num; i--) {
				result = result.prev;
			}
		}

		return result;
	}
	set(index, newValue) {
		let node = this.get(index);
		if (!node) return false;
		node.value = newValue;

		return true;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;

		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);

		const leftLink = this.get(index - 1);
		const rightLink = this.get(index);
		const node = new Node(value);

		node.next = leftLink.next;
		node.prev = rightLink.prev;

		leftLink.next = node;
		rightLink.prev = node;

		this.length++;

		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return false;

		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		const leftLink = this.get(index - 1);
		const removedLink = this.get(index);
		const rightLink = this.get(index + 1);

		leftLink.next = removedLink.next;
		rightLink.prev = removedLink.prev;

		removedLink.prev = null;
		removedLink.next = null;

		--this.length;

		return removedLink;
	}
}

const dList = new DoublyLinkedList();

dList.push(1);
// dList.push(2);
// dList.push(3);
// dList.push(4);

//console.log(dList);
dList.insert(0, 15);
dList.insert(2, 16);
dList.remove(2);
dList.remove(1);
dList.remove(0);

const formArray = () => {
	let i = 0;
	const array = [];

	while (i < dList.length) {
		let catcher = dList.traverse(i, dList.head);
		array.push(catcher.value);
		++i;
	}

	console.log(array);
};

formArray();
