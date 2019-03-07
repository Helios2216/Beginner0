//Define a function, compareObjects, that accepts two objects as arguments.

// compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.

const compareObjects = (obj, obj2) => {
	const objKeys = Object.keys(obj);
	const obj2Keys = Object.keys(obj2);

	if (objKeys.length !== obj2Keys.length) return false;

	for (element in obj) {
		if (obj2[element] === undefined) return false;

		if (obj[element] !== obj2[element]) return false;
	}

	return true;
};
