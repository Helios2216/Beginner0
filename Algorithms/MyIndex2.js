// My index work around without using index of but regex match

function myIndexOf(sentence, match) {
	const matcher = new RegExp(match, 'i');
	const check = (paragraph, reg) => {
		const found = paragraph.match(reg, 'gi');

		if (found !== null) return found['index'];
		else return -1;
	};

	const answer = check(sentence, matcher);

	console.log(answer);
	return answer;
}

console.log(myIndexOf('this is a test', 'test'));
