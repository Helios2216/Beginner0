// Frequencies follow a tally pattern. If asked to find duplicate, occurance || anything resembling a tally: use frequency the solution is linear for now

//pattern:

const frequency = test => {
	// obj because indexing is not need, and indexing can be applied later in an array
	let obj = {};

	// for loop: es6+ for non incremented || tracked values
	for (el of test) {
		obj[el] ? obj[el]++ : (obj[el] = 1);
	}

	//then apply logic on obj
};
