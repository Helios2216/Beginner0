// I am getting better at regex, I was going to do something with min time, can't remember for now. I'm leaving it in just in case I remember

function isValid(string) {
	let falseTime = '24:00';
	let minTime = '00:00';
	let regex = new RegExp(falseTime, 'gi');
	let edgeCase = /^\d{2}[:]\d{2}/;

	if (regex.test(string) === true || edgeCase.test(string) !== true) return false;
	else if (edgeCase.test(string)) return true;
}

console.log(isValid('22:00'));
console.log(isValid('24:00'));
console.log(isValid('Tito'));

// Course solution below for ref

function isValidTime(time) {
	let timeArray = time.split(':');

	if (Number(timeArray[0]) > 23) return false;
	else if (Number(timeArray[1]) > 59) return false;

	// Valid inputs assumed
	return true;
}
