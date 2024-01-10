// For the given start state of an array , change it to final from using methods.
// start: january, february, march, audust
// final: february, june, march, august


let months=['january','february','march','august'];
console.log(months);
months.shift();
months.shift();
console.log(months);
months.unshift('february','june');
console.log(months);