// All Colt Steele
// Helpers
function getDigit(num, i) {
	return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

function digitCount(num) {
	if (num === 0) return 1;

	// log base 10 of num = x; then add 1 to get number of digits
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(num) {
	let maxDigits = 0;
	for (let i = 0; i < num.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(num[i]));
	}

	return maxDigits;
}

// Radix implementation
function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);

	for (let k = 0; k < maxDigitCount; k++) {
		let bucket = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			bucket[digit].push(nums[i]);
		}

		nums = [].concat(...bucket);
	}

	return nums;
}

const test = [ 9680, 10, 3221, 1, 577, 9420, 7, 5662, 4793, 82, 743 ];

console.log(radixSort(test));
