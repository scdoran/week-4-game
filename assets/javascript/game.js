// Here are the variables for the target number and crystal number. 
var targetNumber;

$("#target-number").text(targetNumber);

var userNumbers;

$('#user-number').text(count);

var clueNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12]

var count = 0;

var wins;

var losses;

// Function to randomly pick a new target number each time the game ends.
	function newNumber() {
		targetNumber = 19 + Math.floor(Math.random() * 120);
		$('#target-number').text(number);
	}

	// Function to randomly pick new crystal numbers each time the game ends.
	function switchNumbers() {
		for (var i = 0; i < clueNumbers.length; i++) {
		 	var imageClue = $(".clueImage");
		 	imageClue.attr("data-cluevalue", clueNumbers[i]);
		 }
	}

function newGame() {

// Sets a new random number for the target number.
	targetNumber = newNumber();
	
// Sets new numbers for all of the clues at the start of a new game.
	clueNumbers = switchNumbers(); 
}

$(".clueImage").on("click", function() {
	var clueValue = ($(this).data(""))
}