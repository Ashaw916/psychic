//variable to hold all possible answers
var chars = ["a", "b", "c", "d", "e", "f", "g","h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable for wins, losses, guessesleft, guessed
var wins = 0;
var losses = 0;
var guessesLeft = 100;
var guessed = "";

// references to html locations
var guessText = document.getElementById("guess-text");
var answerText = document.getElementById("answer-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessedText = document.getElementById("guessed-text");

// function to log user input and generate answer
document.onkeyup = function(event) {

    guessText.textContent = "You guessed " + event.key;
    
    //generating answer
    var answer = chars[Math.floor(Math.random() * chars.length)];
        answerText.textContent = "It was " + answer;

    //log wins 
    if ((guessText) === (answer)) {
        wins++;
        winsText.textContent = wins;
    }
    
    //log losses
    else {
        losses++;
       
    }

    //display stats
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft--;
    guessedText.textContent = guessed;

};


document.addEventListener("onkeyup", function() {
    localStorage.setItem("guesses", event.key);
});
    
