// Kata 5
// Title - Human Readable Time

// Description

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	let hours = Math.trunc(seconds / 3600);
	let minutes = Math.trunc((seconds / 3600 - hours) * 60);
	let second = Math.round(((seconds / 3600 - hours) * 60 - minutes) * 60);

	if (hours < 10) {
		hours = `0${hours}`;
	}

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (second < 10) {
		second = `0${second}`;
	}

	return `${hours}:${minutes}:${second}`;
}

const hours = Math.trunc(5.8);

console.log(hours);

console.log(humanReadable(86399));
