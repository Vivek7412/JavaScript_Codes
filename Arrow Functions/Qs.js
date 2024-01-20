// Write an arrow function tha returns the square of a number 'n'.

const square =(n)=>n*n;
console.log(square(4));

// Write a function that print "Vivek" 5 times at intervals of 2s each.


let id=setInterval(()=>{
    console.log("Vivek");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000);