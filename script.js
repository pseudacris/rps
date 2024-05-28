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

console.log(getComputerChoice());

function getHumanChoice(choice) {
    choice = prompt('Please enter rock, paper, or scissors.');

    if (choice === 'rock') {
        return 'You chose rock.';
    } else if (choice === 'paper') {
        return 'You chose paper.';
    } else if (choice === 'scissors') {
        return 'You chose scissors.';
    } else {
        alert('Invalid selection! Try again.');
    }
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

const humanChoice = humanChoice.toLowerCase();

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
        return 'The human wins!';
    } else {
        return 'The computer wins!';
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);