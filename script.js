//select all the values first
const guessField = document.querySelector("#guess");
const sub = document.querySelector("#submit");
const prevGuesses = document.querySelector("#prev");
let remGuesses = document.querySelector("#rem");
let randomNumber = (Math.random() * 100 + 1).toFixed(0);
const result = document.querySelector("#result");
console.log(randomNumber);

//create an array to store the previous guesses
const prevArr = new Array();
let playGame = true;
start(playGame);

function start(playGame) {
  //check if the player is available to play the game
  if (playGame) {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      //stop the value from being sent to the server
      e.preventDefault();
      //match the number
      validateNum(parseInt(guessField.value));
    });
  }
}

//need to validate the input number
function validateNum(num) {
  if (isNaN(num) || num < 1 || num > 100) {
    const msg = "Please enter a valid number";
    displayMessage(msg);
  } else if (parseInt(remGuesses.value) > 0){
    check(num);
    prevArr.push(num);
    displayPrevGuesses(prevArr);
    displayRemaining(parseInt(remGuesses.value));
  }else{
    displayMessage("Lost!!")
    playGame=false;
  }
}

//need to check if the number matches the random number
function check(num) {
  if (num < randomNumber) {
    const low = "Low";
    displayMessage(low);
  } else if (num > randomNumber) {
    const high = "High";
    displayMessage(high);
  } else {
    const match = "You won!!";
    displayMessage(match);
    playGame=false;
  }
}

//need to display the message-->either low,high or matched
function displayMessage(msg) {
  result.textContent = msg;
}

//need to display the previous guesses
function displayPrevGuesses(p) {
  prevGuesses.textContent = p;
}

//need to display the guesses remianing and will also return the number of guesses remaing for the function to limit the entries
function displayRemaining(rem) {
  rem--;
  remGuesses.textContent = rem;
  return rem;
}
