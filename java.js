



// get user choice
function getUserChoice(userInput)  {

  userInput = userInput.toLowerCase();

    if(userInput === 'rock' || 
        userInput === 'paper' || 
        userInput === 'scissors' ||
        userInput === 'bomb') {
        

        return userInput
    } else {
        return 'Wrong you need to type Rock, Paper, Scissors or Bomb'
    }


}





 
//get computer choice

function getComputerChoice() {

    const randomNumber = (Math.floor(Math.random() * 4));

    switch (randomNumber) {

        case 0: 
            return "rock";
            case 1:
                return "paper" ;
                case 2:
                    return 'scissors';
                    



    }

}

        


            
// determine winner


function determineWinner(playerChoice, computerChoice) {

if(playerChoice === computerChoice) {

return 'It is a TIE'

}
if(playerChoice === 'bomb' && computerChoice === 'scissors' || 'rock' || 'paper') {

    return 'you win'
} 





if( playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'rock' ) {

   return 'You win'

    }  else {

        return 'You lose'

    }
  
    


}







// make the game work, playGame
 function playGame() {

const  playerChoice = getUserChoice(prompt('TYpe rock paper'));
const  computerChoice = getComputerChoice();

console.log('You threw ' + playerChoice)
console.log('The comp threw ' + computerChoice)
console.log(determineWinner(playerChoice, computerChoice))



 } 


 const game = (func, n) => {
    for (let i = 1; i <= n; i++ ) {
        func()
    }
 }
     
    game(playGame, 5)
 

