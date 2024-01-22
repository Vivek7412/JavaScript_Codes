let arr =[1,2,3,4,5,6,7,8,9,11,2,55,32,4,5,7,66,7,3];
console.log(...arr);


let char=[..."Vivek"];
console.log(char);


// with array literals
let newArr=[...arr];
console.log(newArr);

// with object literals 
const data={
    email:"vovfiuee@gmail.com",
    password:"abhsfh",
};
const datacopy={...data  , id:431221}; //add new proparty id. 
console.log(datacopy);