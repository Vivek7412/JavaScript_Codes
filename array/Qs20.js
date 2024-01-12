// Write a JavaScript program to test whether the character at the given (character)index is lower case.

let str="DsCetCoLlegE";
let idx=6;
if(str[idx]==str[idx].toLocaleLowerCase()){
    console.log("character is lowercase");
}else{
    console.log("character is not lowercase");
}