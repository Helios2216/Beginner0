const Tree = require('../Tree/treeExport');
const Stack = require('../Stack_Queue/StackExport');

class DFSPost extends Tree {
	constructor(stack, visited) {
		super();
		this.stack = stack;
	}
	dfsPost(node) {
		this.traverse(node);

		return this.mapToArray(this.stack);
	}
	traverse(node = this.root) {
		//Previous course recursion is better! slightly altered
		if (!node) return null;

		// Right then left => [stack] instead of course left right
		this.stack.add(node.value);
		if (node.right) this.traverse(node.right);
		if (node.left) this.traverse(node.left);
	}
	mapToArray(stack) {
		const array = [];
		let temp;
		while (stack.length > 0) {
			temp = stack.remove();

			array.push(temp);
		}

		temp = null;
		return array;
	}
	courseVersion() {
		let data = [];

		const pTraverse = (node) => {
			if (node.left) pTraverse(node.left);
			if (node.right) pTraverse(node.right);
			data.push(node.value);
		};

		pTraverse(this.root);
		return data;
	}
}

const stack = new Stack();

const dfs = new DFSPost(stack);
dfs.insert(10);
dfs.insert(6);
dfs.insert(15);
dfs.insert(8);
dfs.insert(3);
dfs.insert(20);

// Working
console.log(dfs.dfsPost());

// Course Version
//console.log(dfs.courseVersion());
