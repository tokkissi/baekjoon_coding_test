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
  let ans;

  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = Math.min(arr[i - 1] + 1, arr[i - 3] + 1);
  }
  if (arr[n] % 2 === 1) {
    ans = "SK";
  } else {
    ans = "CY";
  }
  console.log(ans);
};
