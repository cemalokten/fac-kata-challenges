// Kata 6
// Title - Array.diff
// Description

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
// 	let array = [];
// 	b.map((bValue) => {
// 		array = a.filter((aValue, index) => {
// 			return aValue != bValue;
// 		});
// 	});
// 	if (b.length === 0) {
// 		return a;
// 	} else {
// 		return array;
// 	}
// }

function arrayDiff(a, b) {
	let array = [];
	array = a.filter((aValue) => {
		return !b.includes(aValue);
	});
	return array;
}

console.log(arrayDiff([ 1, 2, 2, 3 ], [ 1, 2 ]));
