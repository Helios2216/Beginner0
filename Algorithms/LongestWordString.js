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
