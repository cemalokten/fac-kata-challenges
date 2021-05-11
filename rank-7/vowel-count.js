// Kata 7
// Title - Vowel Count
// Description

//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
	const array = str.split('');
	const a = array.filter((vowel) => vowel === 'a');
	const e = array.filter((vowel) => vowel === 'e');
	const i = array.filter((vowel) => vowel === 'i');
	const o = array.filter((vowel) => vowel === 'o');
	const u = array.filter((vowel) => vowel === 'u');
	let vowelsCount = a.length + e.length + i.length + o.length + u.length;
	return vowelsCount;
}
