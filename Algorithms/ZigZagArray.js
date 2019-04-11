// I can't remember the exact question but the idea was to zig zag two arrays : for example arr1 =[1,2,3] and arr2 = [4,5,6] the resulting array would be [1.4,2,5,3,6] if there length is even but the cutoff would be one plus or the length of the lesser length array. I'm going to solve for one plus and then maybe length of the lesser length.

//Solved zigZag

const numArr1 = [0, 1, 2, 3, 4];
const numArr2 = [5, 6, 7, 8, 9];
const numArr3 = [0, 7, 1, 4];
const numArr4 = [2, 5, 3, 8, 9, 6];

const numArr1 = [0, 1, 2, 3, 4];
const numArr2 = [5, 6, 7, 8, 9];
const numArr3 = [0, 7, 1, 4];
const numArr4 = [2, 5, 3, 8, 9, 6];

const zigZag = (arr1, arr2) => {
	console.log(arr2.length - arr1.length);
	let newArr = [];
	let assigner;
	let loop;

	if (arr1.length === arr2.length) loop = arr1.length + arr2.length;
	else if (arr1.length > arr2.length) {
		loop = arr2.length * 2;
	} else if (arr2.length > arr1.length) {
		loop = arr1.length * 2;
	}

	for (let i = 0; i < loop; i++) {
		if (i % 2 !== 0) {
			assigner = arr2.shift();
			newArr.push(assigner);
		} else {
			assigner = arr1.shift();
			newArr.push(assigner);
		}
	}

	return newArr;
};

console.log(zigZag(numArr3, numArr4));
console.log(zigZag(numArr1, numArr2));
