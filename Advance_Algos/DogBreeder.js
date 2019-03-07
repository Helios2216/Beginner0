//Dog Breeder
// Define a function, dogBreeder, that accepts up to two optional arguments:

// name (string)
// age (number)
// dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is Steve. If the user doesn't define the dog's age, assume the dog's age is 0.

const dogBreeder = (name, age = 0) => {
	let obj = {};
	if (typeof name !== 'string') {
		obj.name = 'Steve';
		obj.age = name || 0;
	} else {
		obj.name = name;
		obj.age = age;
	}

	console.log(obj);
	return obj;
};
