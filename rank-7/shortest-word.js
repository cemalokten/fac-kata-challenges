// Kata 7
// Title - Shortest Word
// Description
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solution
function findShort(s) {
	// Split string into seperate words -> load into an array -> sort the array by word length
	const array = s.split(' ').sort((a, b) => a.length - b.length);
	// Return the length of the first word in the sorted array
	return array[0].length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
