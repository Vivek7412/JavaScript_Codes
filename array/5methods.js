// Push
// Pop
// Unshift
// shift

let cars=["bmw","swift","maruti","xuv"];
console.log(cars);
cars.push("toyota"); //add to last 
console.log(cars);
cars.pop();    //delete from last & return it  
console.log(cars);
cars.unshift("toyota","ferrari");  //add to start
console.log(cars);
cars.shift();  //delete from start & return it
console.log(cars);


// index Of : return index of somthing
console.log( cars.indexOf("swift"));
console.log( cars.indexOf("Swift"));
console.log( cars.indexOf("xuv"));

// includes : search for a value
console.log( cars.includes("xuv"));
console.log( cars.includes("Dzire"));

// concat : merge 2 array
let comany=["hyundai","tata Motors","kia","MG"];
console.log(comany);
console.log(cars.concat(comany));
console.log(comany.concat(cars));

// reverse : reverse an array
console.log(comany.reverse());