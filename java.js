



// get user choice
function getUserChoice(userInput)  {

  userInput = userInput.toLowerCase();

    if(userInput === 'rock' || 
        userInput === 'paper' || 
        userInput === 'scissors') {
        

        return userInput
    } else {
        return 'Wrong you need to type Rock, Paper or Scissors'
    }


}





 
//get computer choice

function getComputerChoice() {

    const randomNumber = (Math.floor(Math.random() * 3));

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

if( playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'rock' ) {

   return 'You win'

    } else {

        return 'You lose'

    }


}







// make the game work, playGame
 function playGame() {

const  playerChoice = getUserChoice('rock');
const  computerChoice = getComputerChoice();

console.log('You threw ' + playerChoice)
console.log('The comp threw ' + computerChoice)
console.log(determineWinner(playerChoice, computerChoice))



 } 

 playGame()