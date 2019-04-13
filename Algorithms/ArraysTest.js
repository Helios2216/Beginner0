// Array information for review
const arr = [1, 2, 2, 3, 5, 5, 8, 8, 7, 9];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];

let removeDuplicates = new Set(arr);
console.log(removeDuplicates);
let newArr = [...removeDuplicates];
console.log(newArr, Array.isArray(newArr), Array.isArray(arr));
let testArr = Array.of(7, 3, '132');
console.log(testArr.length, testArr);
let secondTest = Array.from('132');
console.log(secondTest);
let thirdTest = Array(7);
console.log(thirdTest);

let removeStringDupe = new Set(arr2);
console.log(removeStringDupe);
let stringArr = [...removeStringDupe];
console.log(stringArr);
