function getComputerChoice(){
   const randomNum = Math.random();
   if (randomNum < 0.33) {
       return "rock";
   }
   else if (randomNum < 0.66) {
       return "paper";
   }
   else{
       return "scissors";
   }
}

function getHumanChoice(){
    let userChoice = prompt("Enter your choice (rock, paper, or scissors): ");
    
    if (userChoice === "rock"){
        return "rock";
    }
    else if(userChoice === "paper"){
        return "paper";
    }
    else if(userChoice === "scissors"){
        return "scissors";
    }
}

function playGame(){
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice){
    let choice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("its a tie,try again!")
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice==="scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        
        console.log(`You win!${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`computer wins!${computerChoice} beats ${humanChoice}`);
    
    computerScore++;
    }
}
let humanSelection, computerSelection;

console.log("round - 1")
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("round - 2")
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("round - 3")
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("round - 4")
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


console.log("round - 5")
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if(humanScore > computerScore){
    console.log(`you win! you beat computer with ${humanScore} to ${computerScore}`);
} else if (computerScore > humanScore) {
        console.log(`computer win! computer beat you with ${humanScore} to ${computerScore}`);
}else{
    console.log(`its a tie!${humanScore} = ${computerScore} both are equal `);
}

}

playGame();