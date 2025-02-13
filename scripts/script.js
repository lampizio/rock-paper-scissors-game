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
    displayRoundResults(result, userRoundStatus);

}

function displayRoundResults(result, userRoundStatus) {
    document.querySelector(".round-status").innerHTML = result[0];
    document.querySelector(".computer-choice").textContent = "Computer chose: " + result[1].toUpperCase();
    document.querySelector(".user-score").textContent = "You: " + SCORE.win;
    document.querySelector(".computer-score").textContent = "Computer: " + SCORE.lose;
    document.querySelector(".draw-score").textContent = "Draw: " + SCORE.draw;

    if (userRoundStatus) {
        document.querySelector("#win").play();
    } else if (userRoundStatus === null) {
        document.querySelector("#draw").play();
    } else {
        document.querySelector("#lose").play();
    }

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
        return ["<span style='color: green;'>You win!</span>", computerChoice];
    } else if (userRoundStatus === null) {
        SCORE.draw++;
        return ["<span style='color: gray;'>Draw</span>", computerChoice];
    } else {
        SCORE.lose++;
        return ["<span style='color: red;'>You lose ;(</span>", computerChoice];
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