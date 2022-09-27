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
  let arr = Array(1004).fill(0);
  arr[1] = 1;
  arr[2] = 3;

  for (let i = 3; i <= 1000; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
  }
  console.log(arr[n]);
};
