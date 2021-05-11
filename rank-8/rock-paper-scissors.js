// Kata 8
// Title - Rock Paper Scissors
// Description
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
	if (p1 === 'scissors' && p2 === 'rock') {
		return `Player 2 won!`;
	}

	if (p2 === 'scissors' && p1 === 'rock') {
		return `Player 1 won!`;
	}

	if (p1 === 'paper' && p2 === 'rock') {
		return `Player 1 won!`;
	}

	if (p2 === 'paper' && p1 === 'rock') {
		return `Player 2 won!`;
	}

	if (p1 === 'scissors' && p2 === 'paper') {
		return `Player 1 won!`;
	}

	if (p2 === 'scissors' && p1 === 'paper') {
		return `Player 2 won!`;
	}

	//Draw

	if (p1 === p2) {
		return `Draw!`;
	}
};
