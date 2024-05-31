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

const humanSelection = choice;
const computerSelection = compChoice;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        let result;
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
            result = 'Player wins!';        
            console.log(result);
            humanScore++;
            console.log(`Player score: ${humanScore}`);
        } else {
            result = 'You lose!';
            console.log(result);
            computerScore++;
            console.log(`Computer score: ${computerScore}`);
        }
        
    }
    console.log(playRound(humanSelection, computerSelection));   
}   










