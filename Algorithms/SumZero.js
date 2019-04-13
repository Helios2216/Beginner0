// sorted array
const testCase1 = [-3, -2, -1, 0, 1, 2, 3]; //[-3,3]
const testCase2 = [-2, 0, 1, 3]; //undefined
const testCase3 = [1, 2, 3]; // undefined

const mySumZero = arr => {
	const arrEnd = arr.length - 1;
	let left = 0;
	let right = arrEnd;
	let result;
	let multAnswers = [];

	while (left < right) {
		if (arr[left] + arr[right] === 0) {
			result = [arr[left], arr[right]];
			console.log(result);
			//multAnswers.push(result);
			return (result = [arr[left], arr[right]]);
		}
		if (arr[left] + arr[right] > 0) right--;
		else left++;

		// The solution checks for the first instance that this is true, to capture more instances just remove first conditional and fix logic as needed

		if (left === 100) break; // Here for testing only! to prevent inf loops
	}

	console.log(multAnswers);
};

mySumZero(testCase1);

// Above = my solution

//Course solution

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}
