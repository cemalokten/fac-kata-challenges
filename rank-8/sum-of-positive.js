// Kata 8
// Title - Sum of positive
// Description
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// Solution 1 - For loop
function positiveSum(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			total += arr[i];
		}
	}
	return total;
}

// Testing
console.log(positiveSum([ 1, -4, 7, 12 ])); // 20
