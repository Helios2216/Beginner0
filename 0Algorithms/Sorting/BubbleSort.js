// Built from pseudocode, optimization noSwap from Colt Steele, github for easy ref

let testArr = [5, 11, 15, 27, 9, 10, 14, 3, 2, 1];
function bubbleSort(number) {
	let noSwaps;
	for (let i = number.length; i > 0; i--) {
		noSwaps = true;

		for (let j = 0; j < i - 1; j++) {
			if (number[j] > number[j + 1]) {
				let temp = number[j];
				number[j] = number[j + 1];
				number[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	return number;
}

let result = bubbleSort(testArr);
console.log(result);
