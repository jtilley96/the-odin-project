function getComputerChoice(num) {
    switch(num) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
        default: return "Error!"
    }
}

let computerChoice;
let playerChoice;

function playRound(playerChoice, computerChoice) {
    //player choice
    playerChoice = prompt("Choose rock, paper, or scissors: ");
    playerChoice = playerChoice.toLowerCase();
    //computer choice
    let randomNumber = Math.floor(Math.random() * 3);
    computerChoice = getComputerChoice(randomNumber);
    //player chooses rock
    if(playerChoice == "rock" && computerChoice == "scissors") {
        return "You win! Rock beats scissors."
    }
    else if(playerChoice == "rock" && computerChoice == "paper") {
        return "You lose! Paper beats rock."
    }
    //player chooses paper
    else if(playerChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats rock."
    }
    else if(playerChoice == "paper" && computerChoice == "scissors") {
        return "You lose! Scissors beats paper."
    }
    //player chooses scissors
    else if(playerChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats paper."
    }
    else if(playerChoice == "scissors" && computerChoice == "rock") {
        return "You lose! Rock beats scissors."
    }
    //player tries to cheat
    else if(playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissors") {
        return "Invalid input!"
    }
    //player and computer have same choice
    else {
        return "Draw! Play again."
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound(playerChoice, computerChoice);
        if(roundResult.includes("win!")) {
            playerCount++;
        }
        else if(roundResult.includes("lose!")) {
            computerCount++;
        }  
    }
    let result;
    if(playerCount > computerCount) {
        result = `You win! ${playerCount} - ${computerCount}`
    }
    else if(playerCount < computerCount) {
        result = `You lose! ${playerCount} - ${computerCount}`
    }
    else {
        result = `Tie! ${playerCount} - ${computerCount}: Play again`
    }
    return result;
}

console.log(game());