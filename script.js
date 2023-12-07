
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
        messageLog.textContent = 'The round is a tie, both players selected rock!'
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "rock" && playerChoice == "paper") {
        console.log("The player wins!");
        score[1] = score[1] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log("The computer wins!");
        score[0] = score[0] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "paper" && playerChoice == "rock") {
        console.log("The computer wins!");
        score[0] = score[0] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "paper" && playerChoice == "paper") {
        console.log("tie");
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log("The player wins!");
        score[1] = score[1] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log("The player wins!");
        score[1] = score[1] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log("The computer wins!");
        score[0] = score[0] + 1;
        console.log(`The score is ${score[0]} - ${score[1]}`);
        return score;
    }   else if (computerChoice == "scissors" && playerChoice == "scissors") {
        console.log("tie");
        console.log(`The score is ${score[0]} - ${score[1]}`);
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