const rockElement = document.getElementById("rock");
const scissorsElement = document.getElementById("scissors");
const paperElement = document.getElementById("paper");

const validationElement = document.getElementById("validation");
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
const gameOverElement = document.getElementById("gameOver");
const resetElement = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];
  return computerChoice;
};

const choicesAbled = () => {
  rock.disabled = true;
  scissors.disabled = true;
  paper.disabled = true;
};

const choicesDisabled = () => {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
};

const gameRunner = (choice) => {
  const computerChoice = computerChoicer();
  console.log("choice: ", choice);
  console.log("computerChoice: ", computerChoice);

  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")
  ) {
    validation.innerHTML = "PLAYER WON!";
    userScoreElement.innerHTML = userScore;
    userScore++;
  }
  if (
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    validation.innerHTML = "COMPUTER WON!";
    computerScoreElement.innerHTML = computerScore;
    computerScore++;
  }

  if (
    (choice === "scissors" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "paper") ||
    (choice === "rock" && computerChoice === "rock")
  ) {
    validation.innerHTML = "IT'S A TIE.";
  }

  if (userScore === 6 || computerScore === 6) {
    choicesAbled();

    gameOverElement.style.display = "block";
    gameOverElement.innerHTML = "GAME OVER";
    resetElement.style.display = "block";
  }
};

const resetGame = () => {
  choicesDisabled();
  userScore = 0;
  computerScore = 0;

  userScoreElement.innerHTML = userScore;
  computerScoreElement.innerHTML = computerScore;

  resetElement.style.display = "none";
  gameOverElement.style.display = "none";

  console.log(resetElement);
  console.log(gameOverElement);
};
