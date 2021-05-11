// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

// Must contain letters and numbers.

function validPass(password) {
	let regex1 = /^[a-z]{4,19}.*$/gi;
	return regex1.test(password);
}

console.log(validPass('12345abcde')); //VALID
