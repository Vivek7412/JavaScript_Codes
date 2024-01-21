let arr=[1,2,3,7,8,9,4,5,6];
let max=-1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);


//reduce

let maximum=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(maximum);