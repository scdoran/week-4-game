// Here are the variables for the target number, counter, wins and losses.
var game = {
	count: 0,
	wins: 0,
	losses: 0,
	targetNumber: 0
}

// Here are the variables that represent the separate clue images.
var image = {
	one: 0,
	two: 0,
	three: 0,
	four: 0
}

function newGame() {
// Sets a new random number for the target number.
	game.targetNumber = Math.floor((Math.random() * 102) + 19);
	console.log(game.targetNumber);
// // Sets new numbers for all of the clues at the start of a new game.
	image.one = Math.floor(Math.random() * 12) + 1;
	image.two = Math.floor(Math.random() * 12) + 1;
	image.three = Math.floor(Math.random() * 12) + 1;
	image.four = Math.floor(Math.random() * 12) + 1;

	game.count = 0; 
	
	$("#target-number").text(game.targetNumber);
	$("#user-number").text(game.count);
	$("#wins").text(game.wins);
	$("#losses").text(game.losses);
	$("#report").empty();
}

$("#clueImage1").on("click", function() {
	
	game.count += image.one;
	$("#user-number").text(game.count);

	if (game.count === game.targetNumber) {
		game.wins++;
		alert("You win!");
		newGame();
	} else if (game.count > game.targetNumber) {
		game.losses++;
		alert("You lose!");
		newGame();
	} else {
		return;
	}
});

$("#clueImage2").on("click", function() {

	game.count += image.two;
	$("#user-number").text(game.count);

	if (game.count === game.targetNumber) {
		game.wins++;
		alert("You win!");
		newGame();
	} else if (game.count > game.targetNumber) {
		game.losses++;
		alert("You lose!");
		newGame();
	} else {
		return;
	}
});

$("#clueImage3").on("click", function() {

	game.count += image.three;
	$("#user-number").text(game.count);

	if (game.count === game.targetNumber) {
		game.wins++;
		alert("You win!");
		newGame();
	} else if (game.count > game.targetNumber) {
		game.losses++;
		alert("You lose!");
		newGame();
	} else {
		return;
	}
});

$("#clueImage4").on("click", function() {

	game.count += image.four;
	$("#user-number").text(game.count);

	if (game.count === game.targetNumber) {
		game.wins++;
		alert("You win!");
		newGame();
	} else if (game.count > game.targetNumber) {
		game.losses++;
		alert("You lose!");
		newGame();
	} else {
		return;
	}
});

$(document).ready(function() {
    newGame();
});