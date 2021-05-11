// Kata 5
// Title - RGB To Hex Conversion

// Description

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

const number = 255;

console.log(number.toString(16));

function rgb(r, g, b) {
	let rValue =

			r > 255 ? (255).toString(16) :
			r.toString(16);
	let gValue =

			g > 255 ? (255).toString(16) :
			g.toString(16);
	let bValue =

			b > 255 ? (255).toString(16) :
			b.toString(16);
	//---
	if (rValue <= 0) {
		rValue = '00';
	}

	if (gValue <= 0) {
		gValue = '00';
	}

	if (bValue <= 0) {
		bValue = '00';
	}
	//---
	if (rValue.length === 1) {
		rValue = `0${rValue}`;
	}

	if (gValue.length === 1) {
		gValue = `0${gValue}`;
	}

	if (bValue.length === 1) {
		bValue = `0${bValue}`;
	}

	return `${rValue}${gValue}${bValue}`.toUpperCase();
}

console.log(rgb(300, 000, 000));
