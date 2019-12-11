/* 
    Course -v for pop ~ remove:
    var temp = this.first
    if(this.first === this.last) {
          this.last = null
    } this.first = this.first.next;
     etc...  
     this.last = null is the same as removed.next = null    
*/

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// Course uses push pop; same thing...
class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
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
		return ++this.size;
	}
	remove() {
		if (!this.first) return null;

		const removed = this.first;
		const next = this.first.next;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = next;
			removed.next = null;
		}

		--this.size;
		return removed.value;
	}
}

const stack = new Stack();

stack.add(10);
stack.add(5);
stack.add(1);
console.log(stack);

stack.remove();
stack.remove();
stack.remove();
stack.remove();
console.log(stack);
