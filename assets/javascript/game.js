   // Let's start by grabbing a reference to the <span> below.
   var userText = document.getElementById("guess-text");

   // Next, we give JavaScript a function to execute when onkeyup event fires.
   document.onkeyup = function(event) {
     userText.textContent = "You guessed " + event.key;
   };