function getComputerChoice(choice) {
    choice = Math.random();
    if (choice < 1 / 3) {
        return 'rock';
    } else if (choice < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let compChoice = getComputerChoice();
console.log(compChoice);

function getHumanChoice(choice) {
    choice = prompt('Please enter rock, paper, or scissors.');
    choice = choice.toLowerCase();
    if (choice === 'rock' || 
        choice === 'paper' || 
        choice === 'scissors') {
            return choice;
    } else {
        alert('Invalid selection! Try again.');
    }
}

let choice = getHumanChoice();
console.log(`You chose ${choice}.`);

let humanScore = 0;
let computerScore = 0;

const humanSelection = choice;
const computerSelection = compChoice;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ( 
        (humanChoice === 'rock' &&
    computerChoice === 'scissors') ||
        (humanChoice === 'paper' && 
    computerChoice === 'rock') ||
        (humanChoice === 'scissors' && 
    computerChoice === 'paper')
    ) {
       console.log('The human wins!');
    } else {
        console.log('The computer wins!');
    }
}

console.log(playRound(humanSelection, computerSelection));









