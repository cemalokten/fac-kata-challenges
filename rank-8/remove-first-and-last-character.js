// Kata 8
// Title - Remove First and Last Character
// Description
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution - Slice method extracts first and last characters slice(1,-1)
function removeChar(str) {
	return str.slice(1, -1);
}

// Testing
console.log(removeChar('hello'));
console.log(removeChar('oatmilk'));
console.log(removeChar('coffee'));
console.log(removeChar('Sunshine'));
