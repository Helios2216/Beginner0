// sorted array
// My solution 04/13/2019
const testCase1 = [1, 1, 1, 1, 1, 2];
const testCase2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const testCase3 = [];
const testCase4 = [-2, -1, -1, 0, 1];

function countUnique(arr) {
	if (arr.length === 0) return 0;
	let left = 0;
	let right = 0;
	const arrEnd = arr.length - 1;
	let count = 1;

	for (let i = 0; i <= arrEnd * 2; i++) {
		if (arr[left] !== arr[right]) {
			++count;
		}

		if (i % 2 === 0) right++;
		else left++;
	}

	console.log(count);
	return count;
}
countUnique(testCase1);
countUnique(testCase2);
console.log(countUnique(testCase3));
countUnique(testCase4);

// My old solution from 1786 I did retest, but : it feels like another person wrote it, extremely different coding style.

function oldCountUniqueValues(arr) {
	// add whatever parameters you deem necessary - good luck!
	if (arr.length === 0) return 0;

	let count = 0;
	let iLeft = 0;
	let iRight = 1;

	if (iLeft === 0 && iRight === 1 && arr[iLeft] === arr[iRight]) count++;

	while (arr[iRight] < arr.length - 1) {
		if (arr[iLeft] !== arr[iRight]) {
			count++;
		}
		iRight++;
	}
	return count;
}

// course solution
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
