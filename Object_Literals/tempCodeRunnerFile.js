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