// Easy ref   best: nearly sorted.  Time O(n ** 2)
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let j;
		for (j = i - 1; j > -1 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}

	return arr;
}

const ts = [ 2, 1, 9, 76, 4 ];
const ts1 = [ 11, 53, 84, 1, 9, 5, 74, 3, 66, 2, 88 ];

console.log(insertionSort(ts));
console.log(insertionSort(ts1));

/*
break down example = [99,11,53,7,2]
current val = arr[i] which equals 11
j = i - 1 || arr[j] = 99
arr[j] index is greater than -1 && arr[j](99) is > 11
so arr temp will be [99,99,53,7,2] 
for inner loop when arr[j + 1] = arr[j]
after inner loop arr[j] which is 99 will be set to current val: 11
the array will then be [11,99,53,7,2] next i is 53
elements in the array maybe touched more than once based on position

better than useless Bubble and selection: insertion always > bubble

*/
