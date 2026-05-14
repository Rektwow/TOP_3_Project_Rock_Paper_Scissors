let humanScore = 0;
let computerScore = 0;
// this function is the input the user gives
function getHumanChoice() {
  let input = prompt("Choose: Rock, Paper or Scissors");

  // if the user clicks cancel it return null
  if (!input) return "Null";

  // Formating: first letter big, rest small
  let formatted =
    //trim cuts the string and charAt(0) take the first letter + trim again and slice(1) from second letter
    input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
  // example rOcK becomes Rock
  // Validating: check if user chose one of the three answers
  if (
    formatted === "Rock" ||
    formatted === "Paper" ||
    formatted === "Scissors"
  ) {
    return formatted;
    // retuns Rock, Paper oder Scissors
  } else {
    alert("Wrong Input Please choose Rock, Paper or Scissors.");
    return getHumanChoice();
    // Asks user for correct input again until it's correct
  }
}
//console.log("You chose: " + getHumanChoice());

// this function is where the computer chooses randomly
function getComputerChoice() {
  let choice;
  // returns number between 0 and 98 ( I chose that to it's always 33% to hit)
  let randomNumber = Math.floor(Math.random() * 99);

  if (randomNumber < 33) {
    choice = "Rock";
  } else if (randomNumber < 66) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  //console.log("Computer chose: " + choice);
  return choice;
}
//getComputerChoice();

let human = getHumanChoice();
console.log("You chose: " + human);
let computer = getComputerChoice();
console.log("computer chose: " + computer);

// this function will keep track of the score
function score() {
  if (human === "Rock" && computer === "Paper") {
    computerScore++;
    console.log("whatever");
  } else if (human === computer) {
    return null;
  } else if (human === "Paper" && computer === "Scissors") {
    computerScore++;
  } else if (human === "Scissors" && computer === "Rock") {
    computerScore++;
  } else if (human === "Rock" && computer === "Scissors") {
    humanScore++;
  } else if (human === "Paper" && computer === "Rock") {
    humanScore++;
  } else if (human === "Scissors" && computer === "Paper") {
    humanScore++;
  } else {
    return null;
  }
}
score(human, computer);
console.log("you " + humanScore);
console.log("pc " + computerScore);
