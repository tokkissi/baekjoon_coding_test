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
  arr.sort((a, b) => a - b);
  let set = new Set(arr);
  let ans = Array.from(set);
  console.log(ans.join(" "));
};
