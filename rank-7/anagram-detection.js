// Kata 7
// Title - Anagram Detection
// Description

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram

// Solution
// 1 - Make word lowercase
// 2 - Split it up into individual characters
// 3 - Sort the array using sort and localeCompare (Sort loops through with the callback which includes localeCompare)
//   - LocaleCompare() compares two characters/string numerically to find its position, either before or after each other
// 4 - Join the array back into a single word
// 5 - Compare the rearranged word with the original word, which has also been sorted.

var isAnagram = function(test, original) {
	return (
		test.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('') ==
		original.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('')
	);
};

console.log(isAnagram('foefet', 'toffee'));
