// game stats
var wins = 0;
var ties = 0;
var losses = 0;

//array of computer choices
var options = ["R", "P", "S"];

//function that starts the game
var playGame = function() {
    // collect user choice
    var userChoice = prompt("Rock, Paper, or Scissors", "Enter R, P, or S");
    //if user cancels, end function
    if (!userChoice) {
        return;
    }

    //convert user choice to upper case for easy comparison
    userChoice = userChoice.toUpperCase();

    //generate random computer choice
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    alert("The computer chose " + computerChoice);

    //same choices = tie
    if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

    //win conditions for user
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++;
        window.alert("You win!");

    //if none of the above, player loses
    } else {
        losses++;
        window.alert("You lost!");
    }

    //game stats
    window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    //ask user to play again
    var playagain = window.confirm("Play again?");
    if (playagain) {
        playGame();
    }
};

//start the game
playGame();


// what do we need?
// need user choice
//var userChoice = ["R", "P", "S"];
// need computer choice 
//var computerChoice = "";
// wins
//var wins = 0;
// losses 
//var losses = 0;
// ties
//var ties = 0;

//what do we need to do?
//capture user input
//function  captureUserInput(){
    //us the windo prompt method to capture user info for rp or s 

// generate computer choice 
//fucntion 
// compare choices 
    //r beats s
    //s beats paper
    // paper beat roc
    // same ties same 
// increaser / increment winds
// imncrement losses
// increment ties 
// confir, thjat the player wants to play again 
// play game 

// define player choices as r p s
// fnction to create a random value between 1-3 
// create a function to comapre choices 
    // if player chpse r and computer cjhose 1 
        //increment ties 







    