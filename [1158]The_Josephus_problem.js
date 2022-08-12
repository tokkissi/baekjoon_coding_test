let input;
let n;
let k;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = line.split(" ").map((el) => Number(el));
  readline.close();
});

readline.on("close", () => {
  n = input[0];
  k = input[1];
  solution(n, k);
  process.exit();
});

const solution = (n, k) => {
  let sum = k;
  const arr = [];
  const answer = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (arr.length) {
    let index = (sum - 1) % arr.length;
    answer.push(arr.splice(index, 1));
    sum = index + k;
  }
  console.log(`<${answer.join(", ")}>`);
};
