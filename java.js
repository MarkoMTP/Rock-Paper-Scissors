



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

console.log(getComputerChoice());

        


            
// determine winner



// make the game work, playGame
