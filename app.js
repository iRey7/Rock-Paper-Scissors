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
console.log(getComputerChoice());
/* let number = Math.floor(Math.random() * 3) + 1;
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
    //console.log(choice); */

//console.log();

/* - create a function that plays a round
   - Said function takes two parameters: playerSelection, computerSelection
   - Then return a string based on parameters on which is the winner 
   - Make playerSelection case-insensitive 
   - If a tie occurs then restart the round */

function playRound(playerSelection, computerSelection) {
    //getComputerChoice() = computerSelection;

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