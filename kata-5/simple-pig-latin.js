// Kata 5
// Title - Simple Pig Latin

// Description

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	//Code here
	let array = [];
	const regex = /[.,:!?]/g;
	array = str.split(' ');
	const newArr = array.map((word, index) => {
		if (!regex.test(word)) {
			const wordArr = word.split('');
			const firstLetter = wordArr.shift(0);
			wordArr.push(firstLetter);
			wordArr.push(`ay`);

			return wordArr.join('');
		}
		return word;
	});

	return newArr.join(' ');
}
console.log(pigIt('Hello world !'));
