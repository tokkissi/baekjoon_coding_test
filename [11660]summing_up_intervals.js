let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = input.split("\n");
const [N, M] = input.shift().split(" ").map(Number);
let matrix = input.slice(0, N).map((str) => str.split(" ").map(Number));
input = input.splice(N).map((str) => str.split(" ").map(Number));
let answer = "";
let dp = new Array(N);
/// 2d array deep copy
matrix.forEach((val, ind) => {
  dp[ind] = val.slice(0);
});
matrix.forEach((arr, index) => {
  arr.forEach((item, i) => {
    dp[index][i] = item;
    if (i !== 0) dp[index][i] += dp[index][i - 1];
    if (index !== 0) dp[index][i] += dp[index - 1][i];
    if (i !== 0 && index !== 0) dp[index][i] -= dp[index - 1][i - 1];
  });
});
input.forEach(([x1, y1, x2, y2]) => {
  let sum = dp[x2 - 1][y2 - 1];
  if (x1 !== 1) sum -= dp[x1 - 2][y2 - 1];
  if (y1 !== 1) sum -= dp[x2 - 1][y1 - 2];
  if (x1 !== 1 && y1 !== 1) sum += dp[x1 - 2][y1 - 2];
  answer += `${sum}\n`;
});
console.log(answer.trim());
