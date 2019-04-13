function reverseString(str) {
	let newString = '';
	const stringEnd = str.length - 1;

	for (let i = stringEnd; i >= 0; i--) {
		newString += str[i];
	}
	console.log(newString);
	return newString;
}

reverseString('hello'); //Complete
