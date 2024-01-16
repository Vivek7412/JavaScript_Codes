let fruits=["Mango","Banana","Apple","Litch","Orange"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

console.log("odd no. fruits");
for(let i=1;i<fruits.length;i=i+2){
    console.log(i,fruits[i]);
}

console.log("even no. fruits");
for(let i=0;i<fruits.length;i=i+2){
    console.log(i,fruits[i]);
}

console.log("Add pineapple");
fruits.push("pineapple");
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

console.log("Revers order");
for(let i=fruits.length;i>=0;i--){
    console.log(i,fruits[i]);
}