function getComputerChoice () {
    let result;

    result = Math.floor(Math.random()*3)+1;

    switch(result){

        case 1 : 
        return "Rock";
        break;

        case  2 :
        return "Paper";
        break;

        case  3 :
        return "Scissors";
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
        return `Your choice: ${humanChoice}`;
    } else {
        console.log("The item you chose is currently unavailable in this game. Please choose another one.");
        return null;
    }
}

console.log(getHumanChoice())
