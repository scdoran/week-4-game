// Here are the variables for the target number, counter, wins and losses.
var game = {
	count: 0,
	wins: 0,
	losses: 0,
	targetNumber: 0
}

function newGame() {
// Sets a new random number for the target number.
	game.targetNumber = Math.floor((Math.random() * 102) + 19);
	console.log(game.targetNumber);

// Random number function called to make the clueImage ID value set to a random number.
	randomNumber();

// Sets the game count to 0.
	game.count = 0; 

//Resets the displays for the target number, game count, wins, losses and the report. 
	$("#target-number").text(game.targetNumber);
	$("#user-number").text(game.count);
	$("#wins").text(game.wins);
	$("#losses").text(game.losses);
	setTimeout(function(){$("#report").empty()}, 1000);
}

// Sets new numbers for all of the clues at the start of a new game.
function randomNumber() {
// Applying data attributes to each of the image IDs (random number between 1-12).
	$("#clueImage1").attr("data-clueValue", Math.floor(Math.random() * 12) + 1);
	$("#clueImage2").attr("data-clueValue", Math.floor(Math.random() * 12) + 1);
	$("#clueImage3").attr("data-clueValue", Math.floor(Math.random() * 12) + 1);
	$("#clueImage4").attr("data-clueValue", Math.floor(Math.random() * 12) + 1);
}

// This function will run the game when the page is ready.
$(document).ready(function() {

// Function called to run the game.
    newGame();

// Random number function called to make the clueImage ID value set to a random number.
	randomNumber();

// Applying a click event to the clue images by grabbing the class. 
	$(".clueImage").click(function(event){

// This is adding the value of the clicked picture based on the data-clueValue defined above.
		game.count += parseInt($(event.target).attr("data-clueValue"));

// This will document the game count.
		$("#user-number").text(game.count);

// If the game.count(score) is equal to the targetNumber the user will win and a new game will start.
		if (game.count === game.targetNumber) {
			game.wins++;
			$("#report").text("You win!");
			newGame();
// If the game.count(score) is greater than the targetNumber the user will lose and a new game will start.
		} else if (game.count > game.targetNumber) {
			game.losses++;
			$("#report").text("You lose!");
			newGame();
// If the user has not met or exceeded the targetNumber the game will continue.
		} else {
			return;
		}
	});

});