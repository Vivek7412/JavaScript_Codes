// create a function that return the sum of numbers from 1 to n.

function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum+=i;
  }
  return sum;
}
sumOfN(3);
