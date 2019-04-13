// Recreated from memory
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

/* note to self: 
for recursion base case is written better: 

if(Array.is(el))  biggest = findBigNum(el)
else if(biggest < el) biggest = el;

*/
