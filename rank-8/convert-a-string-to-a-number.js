// Kata 8
// Title - Convert a String to a Number!
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Solution - Return the string wrapped in the Number() constructor
var stringToNumber = function(str) {
	return Number(str);
};

const a = stringToNumber('1234');
const b = stringToNumber('605');
const c = stringToNumber('-1405');

// Testing - checking output === number
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
