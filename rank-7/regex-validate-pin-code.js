// Kata 7
// Title - Regex validate PIN code
// Description
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
// 	//Two regex conditions - regex4 and regex6 - check 4 and 6 digits
// 	let regex4 = /^[0-9]{4}$/;
// 	let regex6 = /^[0-9]{6}$/;
// 	if (regex4.test(pin) || regex6.test(pin)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// // /[0-0]/ acceps only number values -
// console.log(validatePIN(12345));

function validatePIN(pin) {
	let regex = /^[0-9]{4}$|^[0-9]{6}$/;
	return regex.test(pin);
}

// /[0-0]/ acceps only number values -
console.log(validatePIN(123095));
