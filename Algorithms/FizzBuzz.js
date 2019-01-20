/*Objective 
Write a function that if a number 3 or greater is divisable 3 return 'fizz', by 5 return 'buzz', by both return 'fizzbuzz', or none
*/

const fizzBuzz = num => {
	if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
	if (num % 3 === 0) return 'fizz';
	if (num % 5 === 0) return 'buzz';

	return 'none';
};

// console.log(fizzBuzz(5));
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(1));
