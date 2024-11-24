const buttons = document.querySelectorAll('.btn');
const computerScore = document.getElementById('computerScore');
const yourScore = document.getElementById('yourScore');
const yourChoice = document.getElementById('yourChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');

//These variables hold the scores of the game.
let computerSc = 0;
let humanScore = 0;

//This function generates the computer's choice.
function getComputerChoice () {

    const choices = ['rock', 'paper', 'scissors'];

    const choice = choices[Math.floor(Math.random() * choices.length)]

    updateComputerChoice(choice);

    return choice;
}


//Function responsible for a round
function playRound () {

    const match = humanChoice+getComputerChoice();
    

    switch (match) {

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('Draw!');
            return 'draw';
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            computerSc++;
            console.log('Computer Win !');
            return 'computer'
                    
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            humanScore++;
            console.log("You win !");
            return 'you';
            
    }

    
};

//This function updates the UI based on the winner.
function updateWinner (winner) {
    if (winner === 'computer'){
        result.innerHTML = '<p>Computer Win !<p>'
        result.classList = "";
        result.classList.add('result', 'loose')
    }else if(winner==='you'){
        result.innerHTML = '<p>You win !<p>'
        result.classList = "";
        result.classList.add('result', 'win')
    }else{
        result.innerHTML = '<p>Draw!<p>'
        result.classList = "";
        result.classList.add('result')
    }
}

//These five functions are utility functions.
function updateScore() {
    computerScore.textContent = computerSc;
    yourScore.textContent = humanScore;
}

function updateComputerChoice( param ) {
    computerChoice.innerText = param;
};

function updateYourChoice( param ) {
    yourChoice.innerText = param;
};

function resetGame(message) {
    alert(message);
    computerSc = 0;
    humanScore = 0;
    updateScore()
    updateComputerChoice('...');
    updateYourChoice('...');
    result.classList = 'result';
    result.innerHTML = '<p>Hmm...<i class="fa-solid fa-gears"></i></p>'
}

function checkGameOver() {
    if(computerSc === 5) {
        setTimeout(()=>{
            resetGame('You lost against the computer!');
        },500)
        
    } else if(humanScore === 5) {
        setTimeout(()=>{
            resetGame('You won against the computer!')
        },500)
    }
}


let humanChoice;

//This event listener is applied to each of the three buttons used to play the game.

buttons.forEach((btn)=>{
    btn.addEventListener('click', () => {
        humanChoice = btn.id;
        
        let winner = playRound();

        updateWinner(winner);
        
        updateScore()
        updateYourChoice(humanChoice)
        
        checkGameOver();
    })

})