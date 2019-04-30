// This is something that has to be memorized...

function fibonacciSequence(num) {
	if (num < 2) return num;

	return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}
