const allResult = document.querySelector('#result');
const choiceBtns = document.querySelectorAll('#btn');
const playerText = document.querySelector('#player');
const compText = document.querySelector('#comp')
const playerScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const btnReset = document.querySelector('#btn-reset');




let playerScores = 0;
let compScores = 0;

let player;
let computer = '';
let result;

 
const playRound = choiceBtns.forEach(button => button.addEventListener('click', function callback()  {
player = button.textContent;
getComputerChoice();
playerText.textContent = `Player: ${player}`
compText.textContent = `Computer: ${computer}`
allResult.textContent = determineWinner();
playerScore.textContent =  `Player Score: ${playerScores}`;
compScore.textContent = `Computer Score: ${compScores}`;


})


);


//get computer choice

function getComputerChoice() {

    const randomNumber = (Math.floor(Math.random() * 3) + 1);

    switch (randomNumber) {

        case 1: 
            computer = 'ROCK'
            break;
            case 2:
                computer = "PAPER" ;
                break ;
                case 3:
                    computer = 'SCISSORS';
                        break;
                }

}

        



            
// determine winner


function determineWinner() {



if(player == computer) {

return 'Draw!'

}

else if(  player == 'PAPER' && computer == 'ROCK' || 
        player == 'ROCK' && computer ==  'SCISSORS' ||
        player == 'SCISSORS' && computer == 'PAPER' ) {
         playerScores++
            return 'You Win!'
            
            
      
} else {
    compScores++
   return 'You Lose!'
}

  
    
}












