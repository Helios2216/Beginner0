let test = document.querySelectorAll('.test');
const regexSearch = /^\s+[A-Z]\w+\s?[|]\s?New\sYork.*/gm;
let array;

test.forEach((el) => {
	let temp = el.textContent.trim().split('\n');

	array = temp;
});
array.map((el) => {
	el.replace(/\s+/gm, '');
	console.log(el);
});
//array.map((el) => el.trim());

//console.log(regexSearch.test(array[9]), array);

console.log(array);
