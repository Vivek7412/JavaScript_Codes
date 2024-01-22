let names=["Ram","Shyam","Krishna", "kanha","hanuman"];
let [winner, runnerup,secondrunnerup, ...others]=names;

console.log(runnerup);
console.log(winner);
console.log(...others);



// DESTRUCTURING(OBJECTS)

const student={
    name:"Nikita",
    age:21,
    class: 12,
    sub:["Python","Java","C","JavaScript"],
    username:"nikita_cse",
    password:"jfhisj"
};


let {username, password} = student;
console.log(username);