const inputResult = document.querySelector('#input');
const choiceBtns = document.querySelectorAll('#btn');
const playerText = document.querySelector('#player');
const compText = document.querySelector('#comp')

let player;
let computer;
let result;



choiceBtns.forEach(button => button.addEventListener('click', => {
        player = button.textContent;
        getComputerChoice();
        playerText.textContent = `Player: ${player}`;
        compText.textContent = `Computer: ${computer}`;
        inputResult.textContent = determineWinner();
    })
)




//get computer choice

function getComputerChoice() {

    const randomNumber = (Math.floor(Math.random() * 3));

    switch (randomNumber) {

        case 0: 
            computer = 'rock'
            break;
            case 1:
                computer = "paper" ;
                break ;
                case 2:
                    computer = 'scissors';
                        break;
                }

}

        



            
// determine winner


function determineWinner(player, computer) {

if(player === computer) {

return 'It is a TIE'

}






if(player === 'rock' && computer === 'scissors' ||
player === 'scissors' && computer === 'paper' ||
player  === 'paper' && computer === 'rock' ) {

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


 

