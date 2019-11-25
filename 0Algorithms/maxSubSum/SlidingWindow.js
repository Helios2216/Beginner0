// I love this function pattern
const testCase = [2, 6, 9, 2, 1, 8, 5, 6, 3];
function maxSubarraySum(arr, num) {
	let maxSub = 0;

	for (let i = 0; i < num; i++) {
		maxSub += arr[i];
	}

	let tempSum = maxSub;

	for (let n = num; n < arr.length; n++) {
		tempSum = tempSum - arr[n - num] + arr[n];

		maxSub = Math.max(maxSub, tempSum);
	}

	return maxSub;
}

console.log(maxSubarraySum(testCase, 3));
