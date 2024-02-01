function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    //console.log(number);
    if (number == 1) {
        choice = 'rock'
    }
    else if (number == 2) {
        choice = 'paper'
    }
    else if(number == 3) {
        choice = 'scissors'
    }
    else {
        choice = 'Computer choice is invalid'
    }
    return choice;
}
//console.log(getComputerChoice());

function getPlayerChoice() {
    let playerInput = prompt('Type your choice!')

    if (playerInput.toLowerCase() == 'rock') {
        return 'rock';
    }
    else if (playerInput.toLowerCase() == 'paper') {
        return 'paper'
    }
    else if (playerInput.toLowerCase() == 'scissors') {
        return 'scissors'
    }
    else {
        return 'That is not a valid option.'
    }
}
//console.log(getPlayerChoice());
/*  set the rules on what beats what
    set the win conditions
    based on win add a score */
function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'rock') && (computerSelection == 'paper')) {
        //Add point to computer here
        return `You lost this round ${computerSelection} beats ${playerSelection}!`
    }
    else if((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        //Add point to computer here
        return `You lost this round ${computerSelection} beats ${playerSelection}!`
    }
    else if((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        //Add point to computer here
        return `You lost this round ${computerSelection} beats ${playerSelection}!`
    }
    else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        //Add point to player here
        return `You won this round ${computerSelection} loses ${playerSelection}!`
    }
    else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        //Add point to player here
        return `You won this round ${computerSelection} loses to ${playerSelection}!`
    }
    else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        //Add point to player here
        return `You won this round ${computerSelection} loses to ${playerSelection}!`
    }
    else {
        //No point added
        return 'It is a tie ' + `${computerSelection} ${playerSelection}`;
    }
}

//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
console.log(playRound(getPlayerChoice(), getComputerChoice()));

/* Create a function to play game
    keep score
    report a winner
    5 rounds */
/* function playGame() {
    return playRound(getPlayerChoice(),getComputerChoice());
}
console.log(playGame());*/