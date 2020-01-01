const Tree = require('../Tree/treeExport');
const Stack = require('../Stack_Queue/StackExport');
const Queue = require('../Stack_Queue/queueExport');

class DFS extends Tree {
	constructor(stack, visited) {
		super();

		this.stack = stack;
		this.visited = visited;
	}
	traverse() {
		if (!this.root) return 'empty';

		let current;

		if (this.visited.length < 1) this.stack.add(this.root);

		if (this.stack.length > 0) {
			current = this.stack.remove();
		}
		if (current.right) this.stack.add(current.right);
		if (current.left) this.stack.add(current.left);

		if (current) {
			this.visited.enqueue(current.value);
		}

		if (this.stack.length === 0) {
			return;
		} else {
			this.traverse();
		}

		return this.visited;
	}
	mapToArray(queue) {
		const array = [];
		let temp;
		while (queue.length > 0) {
			temp = queue.dequeue();
			array.push(temp);
		}

		temp = null;
		return array;
	}
}

/*  
        10
     6      15
  3    8       20

  s[]
  v[10,6,3,8,15,20]
*/

const stack = new Stack();
const visited = new Queue();

const dfs = new DFS(stack, visited);
dfs.insert(10);
dfs.insert(6);
dfs.insert(15);
dfs.insert(8);
dfs.insert(3);
dfs.insert(20);

dfs.traverse();

console.log(dfs.mapToArray(dfs.visited));
