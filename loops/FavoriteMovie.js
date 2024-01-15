const favMovie="Avtar";
let guess=prompt(`Guess my favMovie`);
while((guess!=favMovie)&&(guess!='quit')){
    guess=prompt("Wrong guess. Please try again.");
}
if(guess==favMovie){
    console.log("Congrats!!");
}else{
    console.log("you quit");
}