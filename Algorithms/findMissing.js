const array = [ 4, 12, 9, 5, 6 ];
const array2 = [ 4, 9, 12, 6 ];
const populateObj = (arr, obj) => {
	arr.forEach((value) => (!obj[value] ? (obj[value] = value) : null));

	return obj;
};

function findMissing(arr0, arr2) {
	let obj = populateObj(arr0, {});
	let obj2 = populateObj(arr2, {});
	const missingValue = [];

	arr0.forEach((value) => {
		if (!obj2[value]) {
			missingValue.push(value);
		}
	});

	arr2.forEach((value) => {
		if (!obj[value]) {
			missingValue.push(value);
		}
	});

	console.log(missingValue);
	return missingValue;
}

const test = [ 4, 12, 9, 5, 6 ];
const test1 = [ 4, 9, 12, 6 ];
const test3 = [ 1, 2, 3, 4 ];
const test4 = [ 1, 2, 5, 6 ];

findMissing(test, test1);
findMissing(test3, test4);
