// Kata 5
// Title - Moving Zeros To The End

// Description

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function(arr) {
	let counter = 0;
	let array = arr.filter((element, index, array) => {
		if (element === 0) {
			counter++;
		}
		return element !== 0;
	});
	const zeros = Array(counter).fill(0);
	return (array = [ ...array, ...zeros ]);
};

console.log(moveZeros([ 'a', 'b', 'c', 'd', 0, 1, 3, 1, 9, 9, 'hey', 0, 0, 0, 0, 0, 'hey', 0, 0, 0 ]));
