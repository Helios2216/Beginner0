// Colt Steele walk through rewritten for understanding

function anagram(word1, word2) {
	let lookup = {};
	const looper = (word, obj) => {
		for (el of word) {
			obj[el] ? obj[el]++ : (obj[el] = 1);
		}

		return obj;
	};

	lookup = looper(word1, lookup);
	console.log(lookup);

	for (words of word2) {
		if (!lookup[words]) return false;
		else {
			lookup[words]--;
		}
	}

	console.log(lookup);
	return true;
}

anagram('aaz', 'zaa');
