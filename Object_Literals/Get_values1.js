let stu = {
    1:"a",
    2:"c",
    null:"f",
    true:"g",
    undefined:"r"
};
console.log(stu.null);
console.log(stu[1]);

// object of object
let object = {
  god: {
    a: "ram",
    b: "sita",
    c: "lakshman",
    d: "hanuman",
  },
  b: "ram",
};
console.log(object.god);
console.log(object.god.d);


// Arrays of object

let student=[
    {
        name:"Vivek",
        age:23,
        city:"Bihar"
    },
    {
        name:"Sumit",
        age:22,
        city:"Delhi"
    },
    {
        name:"Adity",
        age:21,
        city:"Chennai"
    }
];
console.log(student);
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[2].city);
console.log(student[2].city);
student[1].city="Assam";
console.log(student);




