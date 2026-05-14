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
console.log("You chose: " + getHumanChoice());

function getComputerChoice() {
  let choice;
  let randomNumber = Math.floor(Math.random() * 99);
  if (randomNumber < 33) {
    Choice = "Rock";
  } else if (randomNumber < 66) {
    Choice = "Paper";
  } else {
    Choice = "Scissors";
  }
  console.log("Computer chose: " + Choice);
}
getComputerChoice();
