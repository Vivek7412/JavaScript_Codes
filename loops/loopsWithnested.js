// Nested loops with Nested arrays

let heroes=[
    ["ironman","spideerman","thor"],["superman","wonder woman","flash"]
]
console.log(heroes);

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length );
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j=${j},${i},${heroes[i][j]}`);
    }
}
