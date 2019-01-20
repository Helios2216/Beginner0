//Objective: write a func that converts Cel to Fahr func(30) //return 86

function celtoFahrenheit(celsius) {
	let Fahrenheit = celsius * (9 / 5) + 32;
	return Fahrenheit;
}

console.log(celtoFahrenheit(30));
console.log(celtoFahrenheit(85));
