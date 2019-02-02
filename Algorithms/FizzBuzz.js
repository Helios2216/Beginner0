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

// I had this weird idea I wanted to try, I couldn't figure out the bitwise version yet(~ 100 on binary). I didn't add string: none because I didn't want to nest tenary: (~ a good look). I can't wait to try (~) as not instead of !().
const fizzBuzz2 = num => `${num % 3 === 0 ? 'fizz' : ''}${num % 5 === 0 ? 'buzz' : ''}`;

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));
