// I am adding custom functionality to the linked list
// As a visual learner I like to see : (clg) the internal of elements

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkList() {
	let length = 0;
	let head = null;

	this.add = function(item) {
		let list = new Node(item);

		if (head === null) {
			head = list;
		} else {
			currentNode = head;

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = list;
		}
		++length;
	};
	this.showHead = function() {
		console.log(head);
	};
	this.showLength = function() {
		console.log(length);
	};
	this.showItem = item => {
		let start = head;

		while (start.data !== item) {
			if (!start.next) {
				console.log('item not found');
				return;
			}
			start = start.next;
		}
		console.log(start);
	};
	this.remove = function(item) {
		let currentNode = head;
		let previousNode;

		if (item === currentNode.data) {
			head = currentNode.next;
		} else {
			while (currentNode.data !== item) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}
		--length;
	};
}

let test = new LinkList();

test.add('TEST');
test.add('TEST2');
test.add('Test3');
//test.showHead();
test.add('Test4');
test.showLength();
test.remove('TEST2');
//test.showHead();
test.showLength();
test.add('test5');
test.add('lala');
test.add('huh');
test.showItem('TEST2');
test.showItem('lala');
