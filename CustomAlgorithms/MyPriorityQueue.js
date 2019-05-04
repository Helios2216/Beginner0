// My oop -v of a queue, extract functions && vars for functional -v
// Add ui, change outputs, and/or priority limiters: switchboard, Dmv ticket, nearly anything that is first come first removed. Add Math.random(Math.floor()) in random method for fun.
//clg removed in prod.
const queue = {
	priorities: [],
	createTask: [],
	priorityOne: [],
	priorityTwo: [],
	priorityThree: [],
	garbageCollection: [],
	showPriority: function(value) {
		// Might be unnecessary if ui is button << this would be removed in prod.
		if (typeof value !== 'number' || value > 4 || value < 0) {
			console.log('Please input a value of 0 to 4');
			return 'Please input a value of 0 to 4';
		}

		if (value === 1) {
			console.log(this.priorityOne);
			return this.priorityOne;
		} else if (value === 2) {
			console.log(this.priorityTwo);
			return this.priorityTwo;
		} else if (value === 3) {
			console.log(this.priorityThree);
			return this.priorityThree;
		} else if (value === 4) {
			console.log(this.garbageCollection);
			return this.garbageCollection;
		}

		console.log(this.priorities);
		return this.priorities;
	},
	queueItems: function(element, priority) {
		this.createTask.push(element, priority);
		this.generatePriority(this.createTask);
		this.createTask = [];
	},
	generatePriority: function(el) {
		if (el[1] === 1) this.priorityOne.push(el);
		else if (el[1] === 2) this.priorityTwo.push(el);
		else if (el[1] === 3) this.priorityThree.push(el);
		else this.garbageCollection.push(el);

		let temp = [];
		temp = temp.concat(this.priorityOne);
		temp = temp.concat(this.priorityTwo);
		temp = temp.concat(this.priorityThree);

		this.priorities = temp;
	},
	dequeue: function() {
		if (this.priorityOne.length !== 0) {
			this.priorityOne.shift();
			this.priorities.shift();
		} else if (this.priorityTwo.length !== 0) {
			this.priorityTwo.shift();
			this.priorities.shift();
		} else if (this.priorityThree !== 0) {
			this.priorityThree.shift();
			this.priorities.shift();
		}
	}
};

queue.queueItems('eat', 1);
queue.queueItems('sleep', 2);
queue.queueItems('etc', 3);
queue.queueItems('live', 1);
queue.showPriority(0);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.showPriority(0);
