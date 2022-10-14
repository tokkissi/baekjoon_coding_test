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
  let arr = inp[1].split(" ").map((el) => Number(el));
  arr.sort((a, b) => b - a);
  let narr = [];
  for (let i = 0; i < arr.length; i++) {
    narr.push(arr[i] + i + 1);
  }
  let maxi = Math.max(...narr);
  console.log(maxi + 1);
};
