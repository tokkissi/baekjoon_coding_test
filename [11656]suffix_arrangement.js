let input;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = line;
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let strlen = inp.length;
  let arr = [];
  for (let i = 0; i < strlen; i++) {
    arr.push(inp.slice(i, strlen));
  }
  let ans = arr.sort().join("\n");
  console.log(ans);
};
