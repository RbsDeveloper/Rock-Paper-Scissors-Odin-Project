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
        return "The Computer is currently unable to choos from the arsenal"
    }
}

console.log(getComputerChoice())
