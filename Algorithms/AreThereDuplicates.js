function areThereDuplicates(...values) {
	// good luck. (supply any arguments you deem necessary.)
	let obj = {};

	for (let el of values) {
		if (obj[el]) return true;
		else obj[el] = 1;
	}

	return false;
}

//Course solution that I like: below

function areThereDuplicatesCourseVer() {
	return new Set(arguments).size !== arguments.length;
}
