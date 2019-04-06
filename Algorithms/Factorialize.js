function factorialize(num) {
	let cap = num;

	for (let i = 1; i < num; i++) {
		cap *= i;
	}

	console.log(cap);
	return num;
}

factorialize(5);

const fact2 = num => {
	let total = 1;

	for (let i = 1; i <= num; i++) {
		total *= i;
	}
	console.log({ total });

	return total;
};

fact2(5);
