class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class SLinkStack {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	add(value) {
		const node = new Node(value);

		if (!this.first) {
			this.first = node;
			this.last = this.first;
		} else {
			node.next = this.first;
			this.first = node;
		}

		return ++this.length;
	}
	remove() {
		if (!this.first) return 'empty';

		const removed = this.first;

		if (this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = removed.next;

			removed.next = null;
		}

		--this.length;

		return removed.value;
	}
}

module.exports = SLinkStack;
