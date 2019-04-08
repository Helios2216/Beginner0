function reverseString(str) {
	let newString = '';
	const stringEnd = str.length - 1;

	for (let i = stringEnd; i >= 0; i--) {
		newString += str[i];
	}
	console.log(newString);
}
//reverseString('hello'); Complete

//--------------------------------------
function isPalindrome(str) {
	let strEnd = str.length - 1;
	if (str.length === 0) return false;
	if (str.length === 1) return true;

	if (str[0] !== str[strEnd]) return false;

	return isPalindrome(str.substring(1, strEnd));
}

//console.log(isPalindrome('racecar')) //complete;

//--------------------------------------
function reverseInt(int) {
	let stringNum = '' + int;
	const consolelog = reverseString(stringNum);
	console.log(consolelog);
}

//reverseInt(521)

//--------------------------------------
function removeNumFromString(word) {
	let newWord = word.replace(/\d/g, '');
	console.log(newWord);
}

// removeNumFromString('abc1234def'); complete

const removeFromString = word => {
	let code;
	let wordEnd = word.length - 1;
	let newString = '';

	for (let i = 0; i <= wordEnd; i++) {
		code = word.charCodeAt(i);

		if (!(code > 47 && code < 58)) newString += word[i];
	}

	console.log(newString);
};

removeFromString('abc123def456ghi');

//--------------------------------------
//Solved on my own: figure out what I was missing!!!!
findBigNum = (arr, biggest = 0) => {
	console.log('initial Biggest:', biggest, arr);

	for (let el of arr) {
		if (biggest < el) biggest = el;
		if (Array.isArray(el)) biggest = findBigNum(el, biggest);

		console.log({ biggest }, { el });
	}

	console.log('outside:', biggest);
	return biggest;
};

console.log(findBigNum([17, [43, 83], 23, [62, 90], 82]));

//--------------------------------------
const factorial = num => {
	let total = 1;

	for (let i = 1; i <= num; i++) {
		total *= i;
	}

	return total;
};

console.log(factorial(5));

//--------------------------------------

// No instructions regarding if lengths equal
const findLongestWord = word => {
	let answer;
	let lengthCheck = 0;
	let newWord = word.split(' ');
	console.log(newWord);
	newWord.forEach(el => {
		if (lengthCheck < el.length) {
			lengthCheck = el.length;
			answer = el;
		}
	});
	console.log(answer);
	return answer;
};

findLongestWord("Ain't no fun if the homies don't code none");

//--------------------------------------
const capFirstWord = sentence => {
	if (sentence.length === 0) return;
	let newSentence = sentence.split(' ');
	let word;

	word = newSentence.map(el => {
		let elEnd = el.length;

		return (el = el[0].slice().toUpperCase() + el.slice(1, elEnd));
	});

	console.log(word);
};

capFirstWord('We are we are we are');
capFirstWord('');
//--------------------------------------
const repeater = (string, num) => {
	return string.repeat(num);
};

console.log(repeater('test', 5));
//--------------------------------------
const isDigit = string => {
	if (string.length === 0) return false;
	const stringTest = /\D/g;

	if (stringTest.test(string) === true) return false;
	else return true;
};

console.log(isDigit('1'), isDigit('d'), isDigit(''), isDigit('fefe5'), isDigit('15255'), isDigit(548));
