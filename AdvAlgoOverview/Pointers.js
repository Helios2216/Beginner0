// Over view

function pointers(test) {
	// set two pointer to  a starting location
	let left = test[0] || 0;
	let right = test[test.length - 1]; // etc it could start on same point as left
	let compare; // value to compare expected output || return as capture
	let optional = 'optional'; // if you want to return multiple true instances in an obj , arr, or symbol etc

	// for loop = traditional loop a.k.a es2015 || for in loop obj only || while loop
	// then logic
}

// STUDY THIS BELOW
// course solution uses loop initialized value as pointer : neat;
const testCase = [1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6];

function countUniqueValues(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}
