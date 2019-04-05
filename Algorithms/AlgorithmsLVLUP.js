function reverseString(str) {
    let newString = '';
    const stringEnd = str.length-1;

    for(let i = stringEnd ; i >= 0; i--) {
    	newString+= str[i];
    }
    console.log(newString);
}
//reverseString('hello'); Complete

function isPalindrome(str) {
	let strEnd = str.length -1;
	if(str.length === 0 ) return false;
	if( str.length === 1)return true;

	if(str[0] !== str[strEnd]) return false;

	return isPalindrome(str.substring(1, strEnd));

}

//console.log(isPalindrome('racecar')) //complete;

function reverseInt(int) {
	let stringNum = '' + int;
	const consolelog = reverseString(stringNum);
	console.log(consolelog);
	

}

//reverseInt(521)

function removeNumFromString(word) {

	let newWord =word.replace(/\d/g, '')
	console.log(newWord);

}

// removeNumFromString('abc1234def'); complete

//Solved on my own: figure out what I was missing!!!!
findBigNum = (arr, biggest =0) => {
	console.log('initial Biggest:', biggest, arr);
	

	for(let el of arr) {
		if(biggest < el ) biggest = el;
		if(Array.isArray(el)) biggest=  findBigNum(el, biggest);
		
	
		console.log({biggest}, {el});

	}

	
	console.log('outside:',biggest);
	return biggest;

}

console.log(findBigNum([17,[43,83],23,[62,90],82]));
