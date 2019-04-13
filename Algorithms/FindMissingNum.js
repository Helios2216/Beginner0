const firstArr = [0, 3, 5, 4, 6, 1, 9, 7];
const secondArr = [1, 2, 5, 0, 6, 7, 9, 3, 4];

function findFirstMissingNum(arr) {
	let sortedArr = arr.sort((a, b) => a - b);
	let loop = arr[arr.length - 1];

	for (let i = 0; i < loop; i++) {
		if (sortedArr.includes(i) === false) {
			console.log(i);
			return i;
		}
	}
}

function findMissingValues(arr) {
	let missingValues = [];
	let sortedArr = arr.sort((a, b) => a - b);
	let loop = arr[arr.length - 1];

	for (let i = 0; i < loop; i++) {
		if (sortedArr.includes(i) === false) {
			missingValues.push(i);
		}
	}

	console.log(missingValues);
	return missingValues;
}

findFirstMissingNum(firstArr);
findFirstMissingNum(secondArr);

findMissingValues(firstArr);
findMissingValues(secondArr);

// Course Version below
function missingNumber(numArr) {
	const numberArray = numArr.sort((num1, num2) => {
		return num1 - num2;
	});

	for (let i = 0; i < numberArray.length; i++) {
		if (i !== numberArray[i]) return i;
	}
}
