function getComputerChoice() {
     let computerChoice = Math.random();
        if (computerChoice < 1 / 3) {
            return 'rock';
        } else if (computerChoice < 2 / 3) {
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