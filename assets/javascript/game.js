var wordsList = ["mickey","minnie","goofy","winnie the pooh","cinderella"];  

var wins = 0; 
var losses = 0; 
var guessesLeft = 10; 
var guessedLetters = []; 
var lettertoGuess = null;  

	var userGuess = wordsList[Math.floor(Math.random() * wordsList.length)]; 

	var updateGuessesLeft = function() {
		document.querySelector("#guessesLeft").innerHTML ="Guesses Left:" + guessesLeft;
	};  

	var updatedGuessSoFar = function() {
		this.lettertoGuess = this.wordsList[Math.floor(Math.random() * this.wordsList.length)];
	};

	var updatedGuessesSoFar = function() {
		document.querySelector("#let").innerHTML = "Your Guesses so far:" + guessedLetters.join(",");
	}; 

	var reset = function() {
		totalGuesses = 10; 
		guessesLeft = 10; 
		updatedGuessesSoFar(); 
	}

	updateLetterToGuess(); 
	updateGuessesLeft(); 

	document.onekeyup = function(event) {
		guessesLeft--;
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); 

		guessedLetters.push(userGuess);
		updateGuessesLeft();
		updatedGuessesSoFar(); 

			if (guessesLeft > 0){
				if (userGuess == letterToGuess){
					wins++; 
					document.querySelector("#wins").innerHTML = "Wins: " + wins; 
					alert("You win!");
					reset();
				}
			  }else if (guessesLeft == 0){
				losses++;
				document.querySelector("losses").innerHTML = "Losses: " + losses;
				alert("Game Over!");
				reset();
			}
		
	};
