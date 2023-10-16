const input = document.querySelector('#input');

const rockBtn = document.querySelector('rock');
const paperBtn = document.querySelector('paper')
const scissorsBtn = document.querySelector('scissors')

const para = document.querySelector('p');
const game = document.querySelector('game');


input.value = '';





const rock = rockBtn.addEventListener('click', () => {
input.value = 'rock';
game.appendChild(input)


})  




 
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

    }  else {

        return 'You lose'

    }
  
    


}







// make the game work, playGame
 function playGame() {

const  playerChoice = getUserChoice();
const  computerChoice = getComputerChoice();

para.textContent = 'You threw ' + playerChoice ;
para.textContent = 'The comp threw ' + computerChoice;
input.value = determineWinner(playerChoice, computerChoice);
  alert('You threw ' + playerChoice + ' and the computer threw ' + computerChoice )
  
alert(determineWinner())


 } 


 

