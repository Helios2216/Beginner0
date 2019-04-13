const testCase1 = '2 apples, 12 oranges'; // return 14
const testCase2 = '123450'; // return 123450
const testCase3 = 'Your payment method is invalid'; // return 0

const digitSum = string => {
	let accum = 0;
	const regex = /\d+/gm;
	const arr = string.match(regex);

	if (arr === null) return 0;

	arr.forEach(el => {
		accum += Number(el);
	});

	// or reduce
	console.log(accum);
	return accum;
};

digitSum(testCase1);
digitSum(testCase2);
digitSum(testCase3);

// Course version

function sumUpNumbers(str) {
	const nums = str.match(/\d+/g) || []; // I see what he did with []
	let sum = 0;

	nums.forEach(num => {
		sum += Number(num);
	});

	return sum;
}
