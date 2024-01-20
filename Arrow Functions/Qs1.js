// Write an arrow function named arrayAverage that accepts an array of numbers and return the average of those number.

const arrayAverage =(arr)=>{
    let total =0;
    for(let number of arr){
        total +=number;
    }
    return total / arr.length;
};
let arr =[1,2,3,4,5,6,7];
console.log(arrayAverage(arr));