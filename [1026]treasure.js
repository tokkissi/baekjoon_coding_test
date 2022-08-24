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
  let A = inp[1].split(" ").map((el) => Number(el));
  let B = inp[2].split(" ").map((el) => Number(el));
  let s = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    s += A[i] * B[i];
  }

  console.log(s);
};
