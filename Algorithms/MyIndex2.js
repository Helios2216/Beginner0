// My index work around without using index of but regex match

function myIndexOf(sentence, match) {
	let check = (paragraph, reg) => {
		let found = paragraph.match(reg, 'gi');

		if (found !== null) return found['index'];
		else return -1;
	};

	let answer = check(sentence, match);

	console.log(answer);
	return answer;
}

console.log(myIndexOf('this is a test', 'test'));
