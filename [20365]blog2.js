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
  let change = 0;
  for (let i = 1; i < inp[1].length; i++) {
    let base = inp[1][0];
    if (inp[1][i] === base) {
      continue;
    }
    if (inp[1][i - 1] === inp[1][i]) {
      continue;
    }
    change++;
  }
  let ans = change;
  if (change > n - change) {
    ans = n - change;
  }
  console.log(ans + 1);
};
