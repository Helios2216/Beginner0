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
