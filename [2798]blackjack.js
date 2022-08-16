const array = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = array[0].split(" ").map((el) => Number(el));
let arr = array[1].split(" ").map((el) => Number(el));
let sum = 0;
let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum <= m && sum > max) {
        max = sum;
      }
      if (max === m) {
        console.log(max);
        return;
      }
    }
  }
}

console.log(max);
