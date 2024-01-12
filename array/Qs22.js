// Write a JavaScript program to check if an element exists in an array or not.

let arr=["hello",'a',23,26,64,-6];
let item="64";
if (arr.indexOf(item)!=-1) {
    console.log("element exists in array");
}else{
    console.log("element doesn't exist in array");
}