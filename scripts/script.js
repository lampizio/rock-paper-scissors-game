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

const MAX_ROUNDS = 5;

function playRound(event) {
    let userChoice = getUserChoiceFromClass(event.target.classList);
    let computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice }`)

    let userRoundStatus = getUserRoundStatus(computerChoice, userChoice);

    let result = processUserRoundStatus(userRoundStatus, computerChoice);
    displayRoundResults(result);

}

function displayRoundResults(result) {
    document.querySelector(".round-status").textContent = result[0];
    document.querySelector(".computer-choice").textContent = "Computer chose: " + result[1].toUpperCase();
}

function getUserChoiceFromClass(className) {
    if (className.contains("rock")) {
        return ITEMS.rock;
    } else if (className.contains("paper")) {
        return ITEMS.paper;
    } else {
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

function processUserRoundStatus(userRoundStatus, computerChoice) {
    if(userRoundStatus) {
        SCORE.win++;
        return ["You win!", computerChoice];
    } else if (userRoundStatus === null) {
        SCORE.draw++;
        return ["Draw!", computerChoice];
    } else {
        SCORE.lose++;
        return ["You lose ;(", computerChoice];
    }
}

function getComputerChoice() {
    let items = Object.values(ITEMS);
    let randInt = parseInt(Math.random() * 3);
    return items[randInt];
}

function main() {
    document.querySelector(".rock").addEventListener("click", playRound);
    document.querySelector(".paper").addEventListener("click", playRound);
    document.querySelector(".scissors").addEventListener("click", playRound);
}

main();