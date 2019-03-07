//ON my Own!!!!!

// Define a function frequencyAnalysis that accepts a string of lower-case letters.

// frequencyAnalysis should return an object containing the count for each letter in the string.

const frequencyAnalysis = aStr => {
	let hold = {};
	for (element of aStr) {
		console.log(element);
		hold[element] ? hold[element]++ : (hold[element] = 1);
	}
	console.log(hold);
	return hold;
};
