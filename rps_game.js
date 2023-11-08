const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
// const possibleChoices = document.querySelectorAll('button')
const rockButton = document.querySelector('#Rock')
const paperButton = document.querySelector('#Paper')
const scissorButton = document.querySelector('#Scissor')
let userChoice
let computerChoice
let result

// possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice 
//     generateComputerChoice()
    
// }))

rockButton.addEventListener('click', () => {
    userChoice = 'Rock';
    userChoiceDisplay.innerHTML = 'Rock';
    generateComputerChoice();
});

paperButton.addEventListener('click', () => {
    userChoice = 'Paper';
    userChoiceDisplay.innerHTML = 'Paper';
    generateComputerChoice();
});
scissorButton.addEventListener('click', () => {
    userChoice = 'Scissor';
    userChoiceDisplay.innerHTML = 'Scissor';
    generateComputerChoice();
});
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1 // can use possibleChoices.length
    
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Scissor'
    }
    if(randomNumber === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    getResult();
}

function getResult() {
    if ( computerChoice === userChoice) {
        result = 'Its a draw'
        document.getElementById("draw-sound").play();
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        result = 'win'
        document.getElementById("win-sound").play();
    }
    if (computerChoice === "Rock" && userChoice === "Scissor"){
        result = 'lose'
        document.getElementById("lose-sound").play();
    }
    if (computerChoice === "Paper" && userChoice === "Scissor")
    {
        result = 'win'
        document.getElementById("win-sound").play();
    }
    if (computerChoice === "Paper" && userChoice === "Rock")
    {
        result = 'lose'
        document.getElementById("lose-sound").play();
    }
    if (computerChoice === "Scissor" && userChoice === "Rock")
    {
        result = 'win'
        document.getElementById("win-sound").play();
    }
    if (computerChoice === "Scissor" && userChoice === "Paper")
    {
        result = 'lose'
        document.getElementById("lose-sound").play();
    }
    resultDisplay.innerHTML = result
}