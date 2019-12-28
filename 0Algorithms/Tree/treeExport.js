class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor() {
		this.root = null;
		this.size = 0;
	}
	insert(value) {
		let node = new Node(value);

		if (!this.root) {
			this.root = node;
			++this.size;
			return this;
		} else {
			let current = this.root;

			while (true) {
				if (value === current.value) {
					return 'No duplicates allowed';
				}
				if (value < current.value) {
					if (current.left === null) {
						current.left = node;
						++this.size;
						return this;
					}
					current = current.left;
				} else {
					if (current.right === null) {
						current.right = node;
						++this.size;
						return this;
					}
					current = current.right;
				}
			}
		}
	}
	find(value) {
		let current = this.root;

		while (true) {
			if (current === null) {
				return null;
			} else if (value === current.value) {
				return true;
			}

			if (value < current.value) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
	}
	
	
}

module.exports = Tree;