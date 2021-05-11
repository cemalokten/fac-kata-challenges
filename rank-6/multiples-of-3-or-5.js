// Kata 6
// Title - Multiples of 3 or 5
// Description

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

function solution(number) {
	const numberSet = new Set();
	for (let i = 0; i < number; i++) {
		if (i % 3 === 0) {
			numberSet.add(i);
		}
		if (i % 5 === 0) {
			numberSet.add(i);
		}
	}
	const totalArray = [ ...numberSet ];
	console.log(totalArray);
	return totalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(solution(30));
