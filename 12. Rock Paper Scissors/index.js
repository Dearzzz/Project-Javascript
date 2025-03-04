// script for rock paper scissore game

// declare all variable all we need
const choice = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

// decalre playGame function that accept 1 parameter playerChoice
function playGame(playerChoice) {
    // declare variable for computer choice

    const computerChoice = choice[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice){

        // check if computerChoice and playerChoice is same
        result = "ITS A TIE";

    }
    else{
        // check if computerChoice and playerChoice is different
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // display playerChoice, computerChoice, and result win or not
    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    computerDisplay.textContent = `Player Choice: ${computerChoice}`;
    resultDisplay.textContent = result;  

    // before get new classlist remove all classlist first
    resultDisplay.classList.remove("greenText", "redText");

    // check value result for add classlist and count score
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}



