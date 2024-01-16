// Nested loops with Nested arrays

let student=[["vivek",95],["vikash",90],["raj",89]];
for(let i=0;i<student.length;i++){
    console.log(`info of student #${i}`); // #${i+1} only for printing 
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}