let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let result;

    result = Math.floor(Math.random()*3)+1;

    switch(result){

        case 1 : 
        return "rock";
        break;

        case  2 :
        return "paper";
        break;

        case  3 :
        return "scissors";
        break;

        default :
        return "The Computer is currently unable to choose from the arsenal"
    }
}

//console.log(getComputerChoice())

function getHumanChoice () {
    let humanChoice = prompt("Please choose one of the following items from the arsenal: 1) Rock, 2) Paper, 3) Scissors .");

    if(humanChoice === ''){
        console.log('Please choose an item from the arsenal.')
        return null;
    } 
    
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("The item you chose is currently unavailable in this game. Please choose another one.");
        return null;
    }
}

//console.log(getHumanChoice())

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound (humanChoice, computerChoice) {

    const match = humanChoice+computerChoice;

    switch (match) {

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log('Draw!');
            break;
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            computerScore++;
            console.log('Computer Win this round !');
            break;
        
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
            humanScore++;
            console.log("You win this round !");
            break;

        default :
            console.log('Looks like we have to forget this round');
            break;
    }

    console.log(`Your choice:${humanChoice}`);
    console.log(`The Computer's choice:${computerChoice}`);
    console.log(`Your score is:${humanScore}`);
    console.log(`The Computer's score:${computerScore}`);

};

playRound(humanChoice, computerChoice);