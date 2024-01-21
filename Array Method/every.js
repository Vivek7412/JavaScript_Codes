let arr = [2, 6, 8, 10]; //all even no. then true or any odd then give false
let ele = arr.every((el) => {
  return el % 2 == 0;  //el%2!=0

});
console.log(ele);
