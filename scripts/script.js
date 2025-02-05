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

function playGame(n) {
    for (let i = 0; i < n; i++) {
        playRound();
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    let userRoundStatus = getUserRoundStatus(computerChoice, userChoice);

    processUserRoundStatus(userRoundStatus, computerChoice, userChoice);

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
        console.log(`You win\nComputer: ${computerChoice}\nYou: ${userChoice}`)
    } else if (userRoundStatus === null) {
        SCORE.draw++;
        console.log(`Draw\nComputer: ${computerChoice}\nYou: ${userChoice}`)
    } else {
        SCORE.lose++;
        console.log(`You lose\nComputer: ${computerChoice}\nYou: ${userChoice}`)
    }
}

function getComputerChoice() {
    let items = Object.values(ITEMS);
    let randInt = parseInt(Math.random() * 3);
    return items[randInt];
}

function getUserChoice() {
    let choice;

    do {
        choice = prompt("Enter the item:\n- Rock/R/r\n- Paper/P/p\n- Scissors/S/s").toLowerCase();
    } while (!isValidUserChoice(choice));

    return transformUserChoice(choice);
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
    let number = getNumberOfRounds();

    playGame(number);

    console.table(SCORE);
}

main();