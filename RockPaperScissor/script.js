
const choices = ['Rock','Paper','Scissors']
function getComputerChoice() {
    const choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
let score = 0
let playerScore = 0
let computerScore =0 
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  if(playerChoice === computerChoice){
    score = 0
  }else if((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')){
    score = 1
  playerScore += score
    if(computerScore > 0){
        computerScore -= 1
    }
  }else{
    score = -1
    computerScore += 1
    if(playerScore > 0){
        playerScore -= 1
    }
  }

  return score
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

const gameScore = document.getElementById('player-score')
const game = document.getElementById('hands')
const result = document.getElementById('result')
function showResult(score, playerChoice, computerChoice) {

  gameScore.innerText = `Your Score:${playerScore}    Computer Score:${computerScore}`
  game.innerText = `🧔‍♂️${playerChoice} VS ${computerChoice}🤖`

  if(score === 0){
    result.innerText = "It's a Draw!"
  } else if(score === -1){
    result.innerText = "you Lose!"
  } else if(score === 1){
    result.innerText = "You Win!"
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const clickCompChoice = getComputerChoice()
    const clickResult = getResult(playerChoice,clickCompChoice)
    showResult(clickResult,playerChoice,clickCompChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton')
    
    rpsButtons.forEach(btn => {
        btn.addEventListener('click',() => {
            onClickRPS(btn.value)
        })
    })
 

  // Add a click listener to the end game button that runs the endGame() function on click
  const endBtn = document.getElementById('endGameButton')
  endBtn.addEventListener('click',endGame)
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    playerScore = 0
    computerScore = 0
  playerScore.innerText = ''
  game.innerText = ''
  result.innerText = ''
}

playGame()