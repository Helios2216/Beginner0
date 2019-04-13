//Find longest word

const test1 = ['Ready', 'steady', 'go', ['longest', ['Bob', 'zzzzzzzzzzzz']]];

function longestWord(wordArr) {
	let longest = '';

	for (el of wordArr) {
		if (Array.isArray(el)) return (longest = longestWord(el));
		else if (longest.length < el.length) longest = el;
	}

	return longest;
}

console.log(longestWord(test1));
