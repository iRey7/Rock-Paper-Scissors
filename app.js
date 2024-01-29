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

function playRound(playerSelection, computerSelection) {
    if(playerSelection > computerSelection) {
        return 'You win!'
    }
    else if(playerSelection < computerSelection) {
        return 'You lose! Try again'
    }
    else {
        return 'Tie round! Try again!'
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));