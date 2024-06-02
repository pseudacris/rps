// function getComputerChoice(choice) {
//     choice = Math.random();
//     if (choice < 1 / 3) {
//         return 'rock';
//     } else if (choice < 2 / 3) {
//         return 'paper';
//     } else {
//         return 'scissors';
//     }
// }

// let compChoice = getComputerChoice();
// console.log(compChoice);

// function getHumanChoice(choice) {
//     choice = prompt('Please enter rock, paper, or scissors.');
//     choice = choice.toLowerCase();
//     if (choice === 'rock' || 
//         choice === 'paper' || 
//         choice === 'scissors') {
//             return choice;
//     } else {
//         alert('Invalid selection! Try again.');
//     }
// }

// let choice = getHumanChoice();
// console.log(`You chose ${choice}.`);

// const humanSelection = choice;
// const computerSelection = compChoice;

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i < 6; i++) {
        
//         function playRound(humanChoice, computerChoice) {
//             console.log(getComputerChoice());
//             getHumanChoice();


//             let result;
//             if (humanChoice === computerChoice) {
//                 return 'It\'s a tie!';
//             } else if ( 
//                 (humanChoice === 'rock' &&
//             computerChoice === 'scissors') ||
//                 (humanChoice === 'paper' && 
//             computerChoice === 'rock') ||
//                 (humanChoice === 'scissors' && 
//             computerChoice === 'paper')
//             ) {
//                 result = 'Player wins!';        
//                 console.log(result);
//                 humanScore++;
//                 console.log(`Player score: ${humanScore}`);
//             } else {
//                 result = 'You lose!';
//                 console.log(result);
//                 computerScore++;
//                 console.log(`Computer score: ${computerScore}`);
//             }
//         }    
    
//     }    
// console.log(playRound(humanSelection, computerSelection));   
// }   

// // for (let i = 1; i < 6; i++) {
//     console.log(playGame());
    
// // }






function getComputerChoice() {
    const choice = Math.random();
    if (choice < 1 / 3) {
        return 'rock';
    } else if (choice < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Please enter rock, paper, or scissors.');
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        alert('Invalid selection! Try again.');
        return getHumanChoice(); // Ask again if invalid choice
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(getComputerChoice());
        let result;
        if (humanChoice === computerChoice) {
            result = 'It\'s a tie!';
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'Player wins!';
        } else {
            result = 'Computer wins!';
        }
        console.log(`Player chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);
        return result;
    }

    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);
        if (result === 'Player wins!') {
            humanScore++;
        } else if (result === 'Computer wins!') {
            computerScore++;
        }

        console.log(`Round ${i}: ${result}`);
        console.log(`Current Score - Player: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log(`Final Score - Player: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('Player is the overall winner!');
    } else if (computerScore > humanScore) {
        console.log('Computer is the overall winner!');
    } else {
        console.log('The game is a tie!');
    }
}

// Start the game
playGame();


