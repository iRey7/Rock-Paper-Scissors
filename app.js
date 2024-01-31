function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    //console.log(number);
    if (number == 1) {
        choice = 'rock'
    }
    else if (number == 2) {
        choice = 'paper'
    }
    else {
        choice = 'scissors'
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

function playRound(playerSelection, computerSelection) {
    if(playerSelection > computerSelection) {
        return 'You win!'
    }
    else if(playerSelection < computerSelection) {
        return 'You lose! Try again'
    }
    else if(playerSelection = computerSelection) {
        return 'Tie round! Try again!'
    }
    else {
        return 'Comparisons have not been made'
    }
}

//let playerSelection = getPlayerChoice();
//let computerSelection = getComputerChoice();
//console.log(playRound(getPlayerChoice(),getComputerChoice()));