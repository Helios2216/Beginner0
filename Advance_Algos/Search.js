//Linear search
let arr = [5, 8, 1, 100, 12, 3, 12];

//Psuedocode:
/* write a function call it linear search that accepts and array and a value. Loop through the array and check if the current array element is equal to the value. If it is, return the index at which the element is found. If it is never found return -1 */

const myLinearSearch = (arr, value) => {
	let lengthCount = 0;

	for (let element of arr) {
		lengthCount++;
		if (element === value) return lengthCount - 1;
	}

	return -1;
};
