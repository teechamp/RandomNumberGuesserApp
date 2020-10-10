let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
const pushRoundButton = document.getElementById('next-round')
const reasonButton = document.getElementById('guess');
// const generateTarget = document.getElementById('target-number');
// Create and generate a target function
function generateTarget() {
    return Math.floor(Math.random() * 10)
  } 
//This function will be called each round to determine which guess is closest to the target number.
function compareGuesses(humanGuess , computerGuess , secretTargetNum){
    const diffHumanTarget = (Math.abs(secretTargetNum - humanGuess));
    const diffComputerTarget = (Math.abs(secretTargetNum - computerGuess));
    if (humanGuess === computerGuess){
      return true;}
     else if ( diffHumanTarget <= diffComputerTarget) {  return true;
    } else { return false;} 
  }  


  // This function will be used to increase the winner's score after each round
  function updateScore(winner) {
}
if(humanScore){
console.log('human' + 1);
}
else if(computerScore){
console.log('computer' + 1);
}
else{
console.log('error');
}

    // This function will be used to update the round number after each round
    function advanceRound() {
    currentRoundNumber++;
    }