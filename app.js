const favMovie="Avtar";
let guess=prompt(`guess my favMovie`);
while((guess!=favMovie)&&(guess!='quit')){
    console.log("wrong guess");
    guess=prompt("");
}