////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock'){
        switch(computerMove){
            case('rock'):
                winner = 'tie'
                break;
            case('paper'):
                winner = 'computer';
                break;
            default:
                winner = 'player';

        }

    } else if (playerMove === "paper"){
        switch(computerMove){
            case('paper'):
                winner = 'player'
                break;
            case('paper'):
                winner = 'tie';
                break;
            default:
                winner = 'computer';

        }

    }else{
        switch(computerMove){
            case('rock'):
                winner = 'computer'
                break;
            case('paper'):
                winner = 'player';
                break;
            default:
                winner = 'tie';

        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    do{
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        switch (winner){
            case 'computer':
                computerWins++;
                break;
            case 'player':
                playerWins++;
                break;
            default:
        }

        console.log('player chose ' + playerMove + ' and computer chose ' + computerMove);
        console.log('the current score is player:' + playerWins + ' computer:' + computerWins)

     }while((playerWins < 5) && (computerWins < 5));
     
    return [playerWins, computerWins];
}
