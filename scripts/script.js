const ITEMS = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
}

const SCORE = {
    win: 0,
    lose: 0,
    draw: 0,
} 

function playRound(event) {
    let userChoice = getUserChoiceFromClass(event.target.className);
    let computerChoice = getComputerChoice();

    let userRoundStatus = getUserRoundStatus(computerChoice, userChoice);

    let resultStr = processUserRoundStatus(userRoundStatus, computerChoice, userChoice);
    displayRoundResults(resultStr);

}

function displayRoundResults(result) {
    document.querySelector(".display-results").innerText= result;
}

function getUserChoiceFromClass(className) {
    switch (className) {
        case 'rock':
            return ITEMS.rock;
        case 'paper':
            return ITEMS.paper;
        case 'scissors':
            return ITEMS.scissors;
    }
}

function getUserRoundStatus(computerChoice, userChoice) {
    if ((userChoice == ITEMS.rock && computerChoice == ITEMS.scissors) ||
        (userChoice == ITEMS.paper && computerChoice == ITEMS.rock)    ||
        (userChoice == ITEMS.scissors && computerChoice == ITEMS.paper)
       ) {
        return true;
    } else if (userChoice == computerChoice) {
        return null;
    } else {
        return false;
    }
}

function processUserRoundStatus(userRoundStatus, computerChoice, userChoice) {
    if(userRoundStatus) {
        SCORE.win++;
        return `You win\nComputer: ${computerChoice}\nYou: ${userChoice}`;
    } else if (userRoundStatus === null) {
        SCORE.draw++;
        return `Draw\nComputer: ${computerChoice}\nYou: ${userChoice}`;
    } else {
        SCORE.lose++;
        return `You lose\nComputer: ${computerChoice}\nYou: ${userChoice}`;
    }
}

function getComputerChoice() {
    let items = Object.values(ITEMS);
    let randInt = parseInt(Math.random() * 3);
    return items[randInt];
}

function isValidUserChoice(choice) {
    return ["rock", "r", "paper", "p", "scissors", "s"].includes(choice);
}

function transformUserChoice(choice) {
    switch (choice) {
        case "rock":
        case "r":
            return ITEMS.rock;

        case "paper":
        case "p":
            return ITEMS.paper;

        case "scissors":
        case "s":
            return ITEMS.scissors;
    }
}

function getNumberOfRounds(number) {
    do {
        number = parseInt(prompt("Enter the number of rounds:"))
    } while (isNaN(number) || number <= 0);

    return number;
}

function main() {
    document.querySelector(".rock").addEventListener("click", playRound);
    document.querySelector(".paper").addEventListener("click", playRound);
    document.querySelector(".scissors").addEventListener("click", playRound);
}

main();