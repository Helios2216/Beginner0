// used for bubbling
function heapChild(index) {
	const result = [ 2 * index + 1, 2 * index + 2 ];

	return result;
}

function findParent(child) {
	const result = [ Math.floor((child - 1) / 2) ];

	return result;
}

console.log(heapChild(0));
console.log(heapChild(1));
console.log(heapChild(2));
console.log(heapChild(3));

console.log(findParent(1));
console.log(findParent(2));
console.log(findParent(3));
console.log(findParent(4));
