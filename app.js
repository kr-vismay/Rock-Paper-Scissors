let userCount = 0;  // indicate the score of user's win
let compCount = 0;  // indicate the score of computer's win

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

// use forEach loop to access the choices 
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
// build logic for game 
function playGame(userChoice,) {
    console.log(userChoice);
    const compChoice = generateComp();
    console.log(compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }

        showWin(userWin, userChoice, compChoice);
    }
}
// gererate comp response 
function generateComp() {
    const opt = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return opt[index];
}

function gameDraw() {
    console.log("game was draw");
    msg.innerHTML = "game was draw play again";
    msg.style.backgroundColor = "rgb(65, 97, 167)"
}
// declare winner
function showWin(userWin, userChoice, compChoice) {
    if (userWin) {
        console.log("you win");
        msg.innerHTML = `you win,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userCount++;
        userScore.innerHTML = userCount;
    }
    else {
        console.log("you lost");
        msg.innerHTML = `you lost,${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compCount++;
        compScore.innerHTML = compCount;
    }
}