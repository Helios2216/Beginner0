// For easy review at whereever
// Note: sorted array! Best case O(1), worse O(log(n)) : steps

function binarySearch(array, value) {
	let left = 0;
	let right = array.length - 1;
	let middle = Math.floor((left + right) / 2);

	// Short circuits
	if (array[left] === value) return left;
	else if (array[right] === value) return right;
	else if (array[middle] === value) return middle;

	while (array[middle] !== value) {
		if (array[middle] < value) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}

		if (array[left] === value) return left;
		else if (array[right] === value) return right;

		middle = Math.floor((left + right) / 2);

		if (array[middle] === value) return middle;

		if (left === middle || right === middle) break;
	}

	return -1;
}
