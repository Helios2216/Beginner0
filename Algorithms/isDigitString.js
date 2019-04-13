const isDigit = string => {
	if (string.length === 0) return false;
	const stringTest = /\D/g;

	if (stringTest.test(string) === true) return false;
	else return true;
};

console.log(isDigit('1'), isDigit('d'), isDigit(''), isDigit('fefe5'), isDigit('15255'), isDigit(548));
