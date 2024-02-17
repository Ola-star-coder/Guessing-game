let guessing = parseInt(prompt("enter any number of your choice"))
while(!guessing){
    guessing = parseInt(prompt('invalid number'))
}

const guessnum = Math.floor(Math.random() * guessing) +1;

let guess = prompt("Now enter your first guess, or type \"q\" to quit")
let attemptnum = 1;

while(parseInt(guess) !== guessnum){
 if (guess === 'q') break;
 guess = parseInt(guess);
 if (guess < guessnum){
    guess = prompt("Too low,Guess a new number!!!")
    attemptnum++;
 } else if (guess > guessnum){
    guess = prompt("Too high, Guess a new number.")
    attemptnum++;
 } else{
    guess = prompt("Invalid guess man, enter a valid number or type \"q\" to quit")
 }
}

if (guess === 'q'){
    console.log("You quit!!!")
    console.log("Okay, Your IQ is low, That why you Quit the game.")
} else{
    console.log(`You got it, it took you ${attemptnum} guesses`)
}