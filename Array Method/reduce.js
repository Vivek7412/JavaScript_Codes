let arr=[1,2,3,4,5,6];
let ele=arr.reduce((result,el)=>{
    console.log(result);
    return result+el;
});
console.log(ele);