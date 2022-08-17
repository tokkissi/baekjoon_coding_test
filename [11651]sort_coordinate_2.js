const array = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

array.shift();

let input = array.map((el) => el.split(" "));

input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let ans = input.join("\n");
let answer = ans.replace(/,/g, " ");
console.log(answer);
