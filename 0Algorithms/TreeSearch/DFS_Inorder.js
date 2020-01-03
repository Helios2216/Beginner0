const Tree = require('../Tree/treeExport');
const Stack = require('../Stack_Queue/StackExport');
const Queue = require('../Stack_Queue/queueExport');

class DFSIn extends Tree {
	constructor(stack) {
		super();
		this.stack = stack;
	}
	dfsIn() {
		this.traverse();

		return this.mapToArray(this.stack);
	}
	traverse(node = this.root) {
		if (!node) return null;
		/* 
		Recursion: Colt Steele from postorder.
		my solution before watching solution
		*/
		if (node.right) this.traverse(node.right);
		stack.add(node.value);
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
			data.push(node.value);
			if (node.right) pTraverse(node.right);
		};

		pTraverse(this.root);
		return data;
	}
}

const stack = new Stack();

const dfs = new DFSIn(stack);
dfs.insert(10);
dfs.insert(6);
dfs.insert(15);
dfs.insert(8);
dfs.insert(3);
dfs.insert(20);

// Working
console.log(dfs.dfsIn());

/*  
        10
     6      15
  3    8       20

 s[20,15,10] or
 s[3,8,6,10]
 q[10,6,8,3]
 final[3,6,8,10,15,20]
 can use Queue.
*/

//console.log(dfs.courseVersion());

/* 
note: recursion can be written: 
node.left && traverse(node.left)
node.right && traverse(node.right)
*/
