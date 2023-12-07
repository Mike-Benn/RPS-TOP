
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerPoints = document.querySelector('#player-points');
const computerPoints = document.querySelector('#computer-points');
const messageLog = document.querySelector('.round-message');
let score = [0 , 0];


// Randomly generates play from the computer player

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }   if (choice == 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

// Prompts player to enter play choice for next round

function getPlayerChoice() {
    let choice = prompt("Please enter your play: 'rock' , 'paper' , or 'scissors'.");
    choice = choice.toLowerCase();

    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        console.log(choice);
        return choice;
    }   else {
        return getPlayerChoice();
    }
    
}

// Simulates a round of rock, paper, scissors

function playRound(computerChoice , playerChoice , score) {

    if (computerChoice == "rock" && playerChoice == "rock") {
        messageLog.textContent = "This round is a tie, both players selected rock!";
        return score;
    }   else if (computerChoice == "rock" && playerChoice == "paper") {
        score[1] = score[1] + 1;
        if (score[1] >= 3) {
            messageLog.textContent = "You won the game! Congratulations!";
            return score;
        } else {
            messageLog.textContent = "You won this round by selecting paper!";
            return score;
        }
    }   else if (computerChoice == "rock" && playerChoice == "scissors") {
        score[0] = score[0] + 1;
        if (score[0] >= 3) {
            messageLog.textContent = "You lost the game! Better luck next time!";
            return score;
        } else {
            messageLog.textContent = "You lost this round, the computer selected rock!";
            return score;
        }
    }   else if (computerChoice == "paper" && playerChoice == "rock") {
        score[0] = score[0] + 1;
        if (score[0] >= 3) {
            messageLog.textContent = "You lost the game! Better luck next time!";
            return score;
        } else {
            messageLog.textContent = "You lost this round, the computer selected paper!";
            return score;
        }
    }   else if (computerChoice == "paper" && playerChoice == "paper") {
        messageLog.textContent = "This round is a tie, both players selected paper!";
        return score;
    }   else if (computerChoice == "paper" && playerChoice == "scissors") {
        score[1] = score[1] + 1;
        if (score[1] >= 3) {
            messageLog.textContent = "You won the game! Congratulations!";
            return score;
        } else {
            messageLog.textContent = "You won this round by selecting scissors!";
            return score;
        }
    }   else if (computerChoice == "scissors" && playerChoice == "rock") {
        score[1] = score[1] + 1;
        if (score[1] >= 3) {
            messageLog.textContent = "You won the game! Congratulations!";
            return score;
        } else {
            messageLog.textContent = "You won this round by selecting rock!";
            return score;
        }
    }   else if (computerChoice == "scissors" && playerChoice == "paper") {
        score[0] = score[0] + 1;
        if (score[0] >= 3) {
            messageLog.textContent = "You lost the game! Better luck next time!";
            return score;
        } else {
            messageLog.textContent = "You lost this round, the computer selected scissors!";
            return score;
        }
    }   else if (computerChoice == "scissors" && playerChoice == "scissors") {
        messageLog.textContent = "This round is a tie, both players selected scissors!";
        return score;
    }

}

// Checks if best of five Rock, Paper, Scissors game is over

function gameOver(score) {
    if (score[0] == 3) {
        console.log("The computer wins the game!");
        return true;
    } else if (score[1] == 3) {
        console.log("The player wins the game!")
        return true;
    } else {
        return false;
    }
}

// Simulates a best of five game of Rock, Paper, Scissors

function game() {
    
    score = [0 , 0];
    while (gameOver(score) == false) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        score = playRound(computerChoice , playerChoice , score);
        

    }
}
/*
function gameNew() {
    score = [0 , 0];
    while(gameOver(score) == false) {
        computerChoice = getComputerChoice();
        rock.addEventListener('click' , (e) => {
            playerChoice = 'rock';
            score = playRound(computerChoice , playerChoice , score);
            console.log('' + score[0] + score[1]);
        })
        paper.addEventListener('click' , (e) => {
            playerChoice = 'paper';
            score = playRound(computerChoice , playerChoice , score);
            console.log('' + score[0] + score[1]);
        })
        scissors.addEventListener('click' , (e) => {
            playerChoice = 'scissors';
            score = playRound(computerChoice , playerChoice , score);
            console.log('' + score[0] + score[1]);
        })
    }
}
*/
rock.addEventListener('click' , (e) => {
    computerChoice = getComputerChoice();
    playerChoice = 'rock';
    score = playRound(computerChoice , playerChoice , score);
    computerPoints.textContent = score[0];
    playerPoints.textContent = score[1];
    if (gameOver(score) == true) {
        computerPoints.textContent = '0';
        playerPoints.textContent = '0';
        score = [0 , 0];
    }
    
})

paper.addEventListener('click' , (e) => {
    computerChoice = getComputerChoice();
    playerChoice = 'paper';
    score = playRound(computerChoice , playerChoice , score);
    computerPoints.textContent = score[0];
    playerPoints.textContent = score[1];
    if (gameOver(score) == true) {
        computerPoints.textContent = '0';
        playerPoints.textContent = '0';
        score = [0 , 0];
    }
})

scissors.addEventListener('click' , (e) => {
    computerChoice = getComputerChoice();
    playerChoice = 'scissors';
    score = playRound(computerChoice , playerChoice , score);
    computerPoints.textContent = score[0];
    playerPoints.textContent = score[1];
    if (gameOver(score) == true) {
        computerPoints.textContent = '0';
        playerPoints.textContent = '0';
        score = [0 , 0];
    }
})