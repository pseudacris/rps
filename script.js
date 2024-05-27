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

function playRound(humanChoice, computerChoice) {
    const noCase = humanChoice.toLowerCase();
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    
    if (noCase === 'rock' && computerChoice === )
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);