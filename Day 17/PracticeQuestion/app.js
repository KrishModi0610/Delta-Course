const fav = "Marco";

let guess = prompt("Guess a Movie");
while(guess != fav && guess != "Quit") {
    alert("Guess Again");
    guess = prompt(`Try Again Guessing my Favorite Movie or type "Quit" to exit`);
}

if(guess == fav) {
    alert("Congratulations you have guessed my Favorite Movie");
}else {
    alert("You Quit");
}