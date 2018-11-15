var rpsContainer = document.getElementById('rps-container');
var rpsButton = document.createElement('button');
var rpsLabel = document.createElement('label');

(function main () {
    rpsButton.id = 'rps-button';
    rpsButton.textContent = 'Play R.P.S.';
    rpsButton.onclick = playRps;
    rpsLabel.textContent = 'Rock Paper Scissors';
    rpsContainer.appendChild(rpsButton);
    rpsContainer.appendChild(rpsLabel);
})();

function playRps() {
    var winner;
    var computerChoice;

    /*
     *  the "prompt" function is build in to the browser. This will give user a text prompt with some info text that you give it.
     * The return value of the function is the text input that the user entered
     */
    var userChoice = prompt('Rock, Paper, or Scissors... which do you choose?');
    
    // if user clicked Cancel in the prompt, exit early. 
    // The "return" statement ensures the rest of the code in this block does not run
    if (userChoice == null ) return;

    userChoice = userChoice.toLowerCase(); // handles any combination of uppercase and lowercase letters

    // if the user gave an invalid answer, exit early.
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        return alert('You must provide a valid choice');
    }

    var randomNumber = Math.floor(Math.random() * 3) // randomly picks from 0, 1, 2
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else if (randomNumber === 2) {
        computerChoice = 'scissors';
    }

    var winningPlay = compareChoices(userChoice, computerChoice);

    if (winningPlay === userChoice) {
        winner = 'You';
    } else if (winningPlay === computerChoice) {
        winner = 'The Computer';
    } else {
        winner = 'Nobody, it\'s a tie...';
    }

    // Alert is built in to the browser- and simply pops an alert with some text that you give it
    alert(`You chose ${userChoice}. The Computer chose ${computerChoice}. \n Winner: ${winner}`);
}

/*
 * Define comparison logic
 * JavaScipt allows functions to be "hoisted" up- meaning they can be used before they are defined. 
 * Notice how we call "compareChoice()" in the function above. This doesn't apply to variables though
 */
function compareChoices(p1, p2) {
    if (p1 === p2) {
        // we have a tie
        return null;
    } else if (p1 === 'rock' && p2 === 'paper') {
        return p2;
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return p1;
    } else if (p1 === 'paper' && p2 === 'rock') {
        return p1;
    } else if (p1 === 'paper' && p2 === 'scissors') {
        return p2;
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return p2;
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return p1;
    }
}

