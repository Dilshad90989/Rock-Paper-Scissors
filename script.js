let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const scoreBoard = document.querySelector('#result');

const userScoreBoard = document.querySelector('#userScore');
const compScoreBoard = document.querySelector('#compScore');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * options.length);
    return options[randomNum];
};

const drawGame = () => {
    console.log("It's a draw!");
    scoreBoard.textContent = "It's a draw!";
    scoreBoard.style.backgroundColor = "blue";
}

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice:", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWins = false;
        if(userChoice === 'rock' && compChoice === 'scissors'){
            userWins = true;
            console.log("User wins with rock against scissors!");
        }
        else if(userChoice === 'paper' && compChoice === 'rock'){
            userWins = true;
            console.log("User wins with paper against rock!");
        }
        else if(userChoice === 'scissors' && compChoice === 'paper') {
            userWins = true;
            console.log("User wins with scissors against paper!");
        } else {
            userWins = false;
        }
        showWinner(userWins);
    }
};

const showWinner = (userWins) => {
    if(userWins) {
        userScore++;
        userScoreBoard.textContent = userScore;
        scoreBoard.textContent = "You win!";
        scoreBoard.style.backgroundColor = "green";
        console.log("User wins! Score:", userScore);
    } else {
        compScore++;
        compScoreBoard.textContent = compScore;
        scoreBoard.textContent = "You lose!";
        console.log("Computer wins! Score:", compScore);
        scoreBoard.style.backgroundColor = "red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute('id');
        playGame(choiceID);
    });
}); 