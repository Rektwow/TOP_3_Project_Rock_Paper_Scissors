let humanSelection = 0;
let computerSelection = 0;

function getHumanChoice() {
  let input = prompt("Choose: Rock, Paper or Scissors");
  if (!input) return "Null";
  let formatted =
    input.trim().charAt(0).toUpperCase() + input.trim().slice(1).toLowerCase();
  if (
    formatted === "Rock" ||
    formatted === "Paper" ||
    formatted === "Scissors"
  ) {
    return formatted;
  } else {
    alert("Wrong Input Please choose Rock, Paper or Scissors.");
    return getHumanChoice();
  }
}

function getComputerChoice() {
  let choice;
  let randomNumber = Math.floor(Math.random() * 99);
  if (randomNumber < 33) {
    choice = "Rock";
  } else if (randomNumber < 66) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}

function playRound(human, computer) {
  if (human === computer) {
    return null;
  } else if (human === "Rock" && computer === "Paper") {
    computerSelection++;
    computerScore++;
  } else if (human === "Paper" && computer === "Scissors") {
    computerSelection++;
    computerScore++;
  } else if (human === "Scissors" && computer === "Rock") {
    computerSelection++;
    computerScore++;
  } else if (human === "Rock" && computer === "Scissors") {
    humanSelection++;
    humanScore++;
  } else if (human === "Paper" && computer === "Rock") {
    humanSelection++;
    humanScore++;
  } else if (human === "Scissors" && computer === "Paper") {
    humanSelection++;
    humanScore++;
  } else {
    return null;
  }
}

let humanScore = 0;
let computerScore = 0;

function score() {
  if (humanSelection > computerSelection) {
    humanSelection--;
    humanScore++;
    return "You win this round!";
  } else if (humanSelection < computerSelection) {
    computerSelection--;
    computerScore++;
    return "You lose this round!";
  } else {
    return "This round is a tie!";
  }
}

function playGame() {
  for (let x = 1; x <= 5; x++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("You chose: " + human);
    console.log("Computer chose: " + computer);
    playRound(human, computer);
    console.log(score(human, computer));
    console.log(
      "Your score " +
        humanScore / 2 +
        " - " +
        computerScore / 2 +
        " Computer score",
    );
  }
}
playGame();
