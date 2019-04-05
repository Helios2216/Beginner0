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

removeNumFromString('abc1234def');