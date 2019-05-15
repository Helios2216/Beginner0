// All Colt Steele, I didn't attempt pseudo this time. Sam review this!
//time O(n)**2
let testArr = [34, 22, 10, 19, 17];

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}
	return arr;
}

console.log(selectionSort(testArr));
