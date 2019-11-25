// Easy ref O(n log n) worst: quad nearly sorted depends on pivot
// reminder random pivot version offline local
const test = [ -5, -1, -9, -72, 4, 8, 2, 1, 5, 7, 6, 3 ];

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	// [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[start]; // Math.random also
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);

	return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (arr.length <= 1) return;
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// Left
		quickSort(arr, left, pivotIndex - 1);
		// Right
		quickSort(arr, pivotIndex + 1, right);
	}
	// optional return.
	return arr;
}

console.log(quickSort(test));
