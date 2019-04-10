// Failed to solve this during 75min test, solved next day after work in 10min. My base case for the solution was just off by a little :(

//Return only the numbers in an Array, the object doesn't count because it is a string version iirc, but if object did count /\d/ would return a string version as long as the function looks inside the object.

let practiceArr = [
	7,
	[1, null, 3],
	{
		number: '7'
	},
	5,
	[4, null, null, 2]
];

const getNumsFrom2DArr = (arr, count = 0) => {
	let regex = /\d/;

	for (let el of arr) {
		if (Array.isArray(el)) count = getNumsFrom2DArr(el, count, console.log('inside Array', el, count));
		else if (regex.test(el)) count++;
	}
	console.log(count);
	return count;
};
