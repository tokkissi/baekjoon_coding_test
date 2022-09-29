let input = [];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input.push(line);
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let n = Number(inp[0]);
  let arr = Array(14).fill(0);
  arr[1] = 0;
  arr[2] = 1;
  arr[3] = 3;
  for (let i = 4; i <= 10; i++) {
    arr[i] = i - 1 + arr[i - 1];
  }
  console.log(arr[n]);
};
