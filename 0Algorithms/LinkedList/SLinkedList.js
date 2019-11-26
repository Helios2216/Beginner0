class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let prev = current;

		while (current.next) {
			prev = current;
			current = current.next;
		}

		this.tail = prev;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}
	shift() {
		if (this.length === 0) return undefined;

		let prevHead = this.head;
		this.head = this.head.next;
		--this.length;

		if (this.length === 0) {
			this.tail = null;
		}

		return prevHead;
	}
	unshift(value) {
		let newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			let prevHead = this.head;

			this.head = newNode;
			this.head.next = prevHead;
		}

		this.length++;

		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let count = 0;
		let current = this.head;

		while (count < index) {
			current = current.next;
			count++;
		}
		return current;
	}
	set(index, value) {
		let setNode = this.get(index);

		if (!setNode) return false;

		setNode.value = value;

		return true;
	}
	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let prevNode = this.get(index - 1);
		let newNode = new Node(value);
		newNode.next = prevNode.next;
		prevNode.next = newNode;

		this.length++;

		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let delNode = this.get(index);

		prevNode.next = delNode.next;
		this.length--;

		return delNode;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let prev = null;
		let next;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;

			prev = node;
			node = next;
		}

		return this;
	}
}

let list = new LinkedList();
list.unshift(7);
list.push(3);
list.push(2);
list.push(4);

list.reverse();

list.changeHead(81);

//console.log(list);
