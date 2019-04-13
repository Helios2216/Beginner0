function isPalindrome(str) {
	let strEnd = str.length - 1;
	if (str.length === 0) return false;
	if (str.length === 1) return true;

	if (str[0] !== str[strEnd]) return false;

	return isPalindrome(str.substring(1, strEnd));
}

console.log(isPalindrome('racecar')); //complete;
