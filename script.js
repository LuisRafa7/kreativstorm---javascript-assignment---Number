const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  return randomNumber;
};

const getPlayerGuess = () => {
  const playerChoice = prompt("Choose a number between 1-100:");
  const playerChoiceNumber = parseInt(playerChoice);
  if (playerChoiceNumber >= 1 && playerChoiceNumber <= 100) {
    alert(`You choose ${playerChoiceNumber}!`);
    console.log("Your Choice", playerChoiceNumber);
    return playerChoiceNumber;
  } else {
    alert("Only numbers between 1-100 is accept!");
    return getPlayerGuess();
  }
};

const checkGuess = (random, player) => {
  if (player > random) {
    alert(`${player} is too high!`);
    console.log(`${player} is too high!`);
  }
  if (player < random) {
    alert(`${player} is too low!`);
    console.log(`${player} is too low!`);
  }
  if (player == random) {
    alert(`${player} is the right number!`);
    console.log(`${player} is the right number!`);
    return "guess";
  }
};

const game = () => {
  alert("Welcome to the Guessing Game!");
  const randomNumber = generateRandomNumber();
  for (let i = 0; i < 10; i++) {
    const playerGuess = getPlayerGuess();
    const result = checkGuess(randomNumber, playerGuess);
    if (result == "guess") {
      const score = 100 - i * 10;
      alert(
        `Are you a wizard?\n${playerGuess} is the correct number!\nYou guess after ${
          i + 1
        } rounds!\nYour score is ${score}!\nYOU WIN!`
      );
      console.log(`The number is ${playerGuess}!`);
      console.log(`You guess after ${i + 1} rounds!`);
      console.log(`Your score is ${score}!`);
      console.log("YOU WIN!");
      break;
    }
    if (result != "guess" && i == 9) {
      alert(`AHAHAHAHAH! Your score is 0!\nYOU LOSE!`);
      console.log(`Your score is 0!`);
      console.log("YOU LOSE!");
    }
  }
};

game();
