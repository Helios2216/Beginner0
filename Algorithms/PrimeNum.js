// Potential solution for console logging prime numbers, I did test up to 100. However, I would need to write a jasmine or jest test to know for sure if this is the solution. I am familiar with both but I haven't solidified my ability to write test. For now this is the solution but I will have to review this.

function primeNum(num) {
	for (let i = 2; i <= num; i++) {
		if (i === 2) console.log(i);
		if (i === 3) console.log(i);
		if (i === 5) console.log(i);
		if (i === 7) console.log(i);

		if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) console.log(i);
	}
}

primeNum(100);
