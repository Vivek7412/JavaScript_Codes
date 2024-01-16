let stu = {
  name: "vivek",
  age: 23,
  marks: 90.5,
  city: "Bihar",
};
console.log(stu);
console.log(stu.city);

console.log("Change the city to Chennai");
stu.city = "Chennai";
console.log(stu);

console.log("Add a new property, gender:Male");
stu.gender="Male";
console.log(stu);

console.log("change the marks to A");
stu.marks="A";
console.log(stu);

delete stu.marks;
console.log(stu);