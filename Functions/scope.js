
let sum=55; //Global scope

function calSum(a,b){
    let sum=a+b;  //Function scope
    console.log(sum);
}
calSum(5,5);  //print function scope

console.log(sum);  //print global scope

let age=25;
if (age>=18) {
    let str="adult";  
    console.log(str);  //block scope
}

//lexical scope
function outerFun(){
    let x=5;
    let y=10;
    function innerFun(){
        console.log(x);
    }
    innerFun();
}
outerFun();