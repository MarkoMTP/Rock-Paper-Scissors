
//user can choose write either rock paper scissors choices
//make a prompt that asks for a choice

let choices = ['Rock, Paper or Scisors'];

function getComputerChoice() {

return choices[Math.floor(Math.random() * 3  )];

}

function playRound(playerChoice, computerChoice) {


    
}



function determineWinner(playerChoice, computerChoice) {

if (playerChoice === computerChoice) 

return 'TIE!';

} 

else if (playerChoice === 'Rock' && computerChoice === 'Scissors')  ||
            
            (playerChoice === 'Paper' && computerChoice === 'Rock') || 
            
            (playerChoice === 'Scissors' && computerChoice === 'Paper')

      return  "You win!";
    


    else 
         return 'Computer wins!'
    
    


 

