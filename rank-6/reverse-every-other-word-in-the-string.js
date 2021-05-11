// Kata 6
// Title - Reverse every other word in the string
// Description

// Reverse every other word in a given string, then return the string.
// Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
// Punctuation marks should be treated as if they are a part of the word in this kata.

// Solution -
// 1 - Trim whitespace from string
// 2 - Split and put into array
// 3 - Loop through array with map
// 4 - if the index isnt divisible by 2 (0 remainder) then splice the array with the reversed word (note: word must be split before reveresed)
// 5 - Splice removes old word, and add in new
// 6 - return joined array
function reverse(str) {
	const array = str.trim().split(' ');
	array.map((word, index, array) => {
		if (index % 2 != 0) {
			array.splice(index, 1, word.split('').reverse().join(''));
		}
	});
	return array.join(' ');
}

console.log(reverse('hello my name is cemal'));
