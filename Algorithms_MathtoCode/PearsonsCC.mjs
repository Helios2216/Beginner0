/*
 Values and calculation by hand from Eugene O'Loughlin : youtube
 video title: How to...Calculate Person's correlation coefficeint (r) by hand 
 */

// Person's correlation coefficent as code w/ test case
export const testCaseX = [17, 13, 12, 15, 16, 14, 16, 16, 18, 19];
export const testCaseY = [94, 73, 59, 80, 93, 85, 66, 79, 77, 91];

// Returns the mean of numbers from an Array
export const mean_of_i = arrNum => {
	let mean = 0;
	let result;
	for (let i = 0; i < arrNum.length; i++) {
		mean += arrNum[i];
	}
	result = mean / arrNum.length;
	return result;
};

// Returns an Array of (i - i_bar)
const diff_of_i_minus_i_bar = arrNum => {
	let mean = mean_of_i(arrNum);
	let sums = [];

	for (let i = 0; i < arrNum.length; i++) {
		let sum_of_row = arrNum[i] - mean;
		sums.push(Number(sum_of_row.toFixed(2)));
	}

	return sums;
};

// Returns (i - i_bar) squared as an Array of values
const square_of_i = arrNum => {
	let i_minus_i_bar = diff_of_i_minus_i_bar(arrNum);

	let squared = i_minus_i_bar.map(el => Number((el ** 2).toFixed(2)));

	return squared;
};

// returns (x - x_bar) * (y - y_bar)
const product_of_xy = (arrX, arrY) => {
	let x = diff_of_i_minus_i_bar(arrX);
	let y = diff_of_i_minus_i_bar(arrY);
	let result = x.map((el, idx) => Number((el * y[idx]).toFixed(2)));
	return result;
};

//---------------------------------------------------------------------
// Reducer w/o for loop using traditional functional for fun
function reducer(arr) {
	return arr.reduce((acc, value) => (acc += value), 0);
}

// returns (x -x_bar)**2 times (y - y_bar)**2 then sqrt of value
const sqrt_divisor = (arrX, arrY) => {
	let x = reducer(square_of_i(arrX));
	let y = reducer(square_of_i(arrY));
	let result = Number(Math.sqrt(x * y).toFixed(2));
	return result;
};

//-----------------------------------------------------------
// sigma  of (x-x_bar) * (y -y_bar)
const sigma_xy = (arrX, arrY) => {
	let result = product_of_xy(arrX, arrY).reduce((acc, value) => (acc += value), 0);

	return Number(result.toFixed(2));
};

// Person's correlation coefficient (r)
export const r_CorrelationCoefficient = (x, y) => {
	let dividend = sigma_xy(x, y);
	let divisor = sqrt_divisor(x, y);

	return Number((dividend / divisor).toFixed(4));
};

//let r = r_CorrelationCoefficient(testCaseX, testCaseY);
//console.log(r);
