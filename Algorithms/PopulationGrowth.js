//initial population is 1000
//population usually increases by 2 percent or 0.02
// + 50 new inhabitants, therefore  (initialPop *0.02) + 50;
//target value 1200 # of years required?

const populationGrowth = (currentPopulation, percentAugmenter, migration, evalGrowth) => {
	let number_of_years = 0;
	// while the current population is less than the target increment the years, if it is equal
	// or over the population target return the years it took to reach that point.

	const growthPercent = percentAugmenter / 100;

	while (currentPopulation < evalGrowth) {
		++number_of_years;

		currentPopulation += Math.floor(currentPopulation * growthPercent + migration);

		console.log(currentPopulation);

		if (number_of_years > 50) break;
	}

	console.log(number_of_years);

	return number_of_years;
};

populationGrowth(1000, 2, 50, 1200);
