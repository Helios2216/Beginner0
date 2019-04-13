// My Version
const testCase1 = [1, 2, 3, 1];
const testCase2 = [3, 1];
const testCase3 = [0, 4, 5, 0, 3, 6];
const myTestCase1 = [11, 12, 13, 11, 0, 1, 2, 3, 7, 8, 7];

function findDuplicate(arr) {
	let obj = {};
	let duplicates = [];

	for (el of arr) {
		obj[el] ? obj[el]++ : (obj[el] = 1);
	}

	for (item in obj) {
		if (obj[item] > 1) duplicates.push(item);
	}

	if (duplicates.length > 0) console.log(duplicates, true);
	else console.log(false);
	if (duplicates.length > 0) return duplicates;
}

findDuplicate(testCase1);
findDuplicate(testCase2);
findDuplicate(testCase3);
findDuplicate(myTestCase1);

// Course Version below: javascript-360

function isDuplicated(numArray) {
	const sortedNumsArray = numArray.sort((num1, num2) => {
		return num1 - num2;
	});

	for (let i = 0; i < sortedNumsArray.length - 1; i++) {
		if (sortedNumsArray[i] === sortedNumsArray[i + 1]) return true;
	}

	return false;
}
