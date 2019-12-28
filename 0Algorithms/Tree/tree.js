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
	traverse(value) {
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
	courseFind(value) {
		if (this.root === null) return false;
		// uses var, converted to let
		let current = this.root,
			found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
			if (!found) return undefined;
			// return node || false || undefined; pref
			return current;
		}
	}
}

const tree = new Tree();
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(1);
tree.insert(2);
tree.insert(0);
tree.insert(4);

console.log(tree);
console.log(tree.insert(1));
console.log(tree.traverse(1));
console.log(tree.traverse(100));

/* 
insertion: O(log n), searching O(log n). 
Skip a step base on >/< current.value
note: this is for a binary search tree,
but it is not guaranteed base on configuration
i.e don't make bad trees...
*/
