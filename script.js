const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    return randomNumber;
  };
  
  const getPlayerGuess = () => {
    const playerChoice = prompt("Choose a number between 1-100:");
    
    // If the user clicks 'Cancel', playerChoice will be null
    if (playerChoice === null) {
        const confirmCancel = confirm(
            "Are you sure you want to cancel? Numbers don't bite!"
        );
        
        // If the player confirms cancel, return null to exit
        if (confirmCancel) {
            return null; // Stop the game when user confirms cancellation
        } else {
            // If the player doesn't confirm cancel, ask for input again
            return getPlayerGuess();
        }
    }

    const playerChoiceNumber = parseInt(playerChoice);

    if (playerChoiceNumber >= 1 && playerChoiceNumber <= 100) {
        alert(`You chose ${playerChoiceNumber}!`);
        console.log("Your Choice is", playerChoiceNumber);
        return playerChoiceNumber;
    } else {
        alert("Only numbers between 1-100 are accepted!");
        return getPlayerGuess();
    }
};

  
  const checkGuess = (random, player) => {
    if (player === null) {
      alert("Game canceled.");
    } 
    else {
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
    }
  };
  
  const game = () => {
    alert("Welcome to the Number Guessing Game!");
    const randomNumber = generateRandomNumber();
    for (let i = 0; i < 10; i++) {
      const playerGuess = getPlayerGuess();
      const result = checkGuess(randomNumber, playerGuess);
      if (result == "guess") {
        const score = 100 - i * 10;
        alert(
          `Are you a wizard?\n\n${playerGuess} is the correct number.\nIt took you .. *drum rolls* ${
            i + 1
          } rounds to guess correctly. \nFinal score: ${score}\nStatus: WIN`
        );
        console.log(`The number is ${playerGuess}!`);
        console.log(`You guessed correctly after ${i + 1} rounds.`);
        console.log(`Your score is ${score}!`);
        console.log("YOU WIN!");
        break;
      }
      if (result != "guess" && i == 9) {
        alert(`MWAHAHAHAHAH!\n\n${randomNumber} is the correct number. \nFinal score: 0\nStatus: LOSE`);
        console.log(`Your score is 0!`);
        console.log("YOU LOSE!");
      }
    }
    const confirmRestart = confirm("Do you want to play again?");
    if (confirmRestart) {
      return game();
    } else {
      return null;
    }
  };
  
  game();
  
