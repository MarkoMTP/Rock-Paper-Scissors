const allResult = document.querySelector('#result');
const choiceBtns = document.querySelectorAll('#btn');
const playerText = document.querySelector('#player');
const compText = document.querySelector('#comp')

let player;
let computer = '';
let result;



choiceBtns.forEach(button => button.addEventListener('click', () => {
        player = button.textContent;
        getComputerChoice();
        playerText.textContent = `Player: ${player}`;
        compText.textContent = `Computer: ${computer}`;
        allResult.textContent = determineWinner();
    })
)



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

return 'It is a TIE'

}

else if(  computer == 'SCISSORS') {
    return ( player == 'ROCK')  ?  'You Win' : 'You Lose';
}

  
    
else if(  computer == 'PAPER') {
    return ( player == 'SCISSORS')  ?  'You Win' : 'You Lose';
}

else if(  computer == 'ROCK') {
    return ( player == 'PAPER')  ?  'You Win' : 'You Lose';
}



}








