// Kata 5
// Title - ROT13

// Description

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13
// letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
	const array = message.toLowerCase().split('');
	const upperCase = message.split('');
	array.forEach((letter, index, array) => {
		if (letter.charCodeAt(0) >= 96 && letter.charCodeAt(0) <= 122) {
			if (letter.charCodeAt(0) + 13 > 122) {
				const number = letter.charCodeAt(0) + 13 - 122 + 96;
				array[index] = String.fromCharCode(number);
			} else {
				array[index] = String.fromCharCode(letter.charCodeAt(0) + 13);
			}
		}
	});

	for (let i = 0; i < array.length; i++) {
		if (upperCase[i] == upperCase[i].toUpperCase()) {
			array[i] = array[i].toUpperCase();
		}
	}

	return array.join('');
}

console.log(rot13('z'));
console.log('z'.charCodeAt(0));

122 - 96;

//96 - 122
