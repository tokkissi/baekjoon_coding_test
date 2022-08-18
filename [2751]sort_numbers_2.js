let input = [];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input.push(Number(line));
});

readline.on("close", () => {
  input.shift();
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let set = new Set(inp);
  let arrset = Array.from(set);
  arrset.sort((a, b) => Number(a) - Number(b));
  let ans = arrset.join("\n");
  console.log(ans);
};
