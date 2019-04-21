const objectify = (arr, obj) => {
	for (let el of arr) {
		obj[el] ? obj[el]++ : (obj[el] = 1);
	}

	return obj;
};

function sameFrequency(num1, num2) {
	// good luck. Add any arguments you deem necessary.
	let num1Obj = {};
	let num2Obj = {};
	let num1Arr = num1.toString().split('');
	let num2Arr = num2.toString().split('');
	objectify(num1Arr, num1Obj);
	objectify(num2Arr, num2Obj);

	for (let el in num1Obj) {
		if (num2Obj[el] === undefined) return false;
		else if (num1Obj[el] !== num2Obj[el]) return false;
	}

	return true;
}
