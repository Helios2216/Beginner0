function removeNumFromString(word) {
	let newWord = word.replace(/\d/g, '');
	console.log(newWord);
}

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

//complete
removeNumFromString('abc1234def');
removeFromString('abc123def456ghi');
