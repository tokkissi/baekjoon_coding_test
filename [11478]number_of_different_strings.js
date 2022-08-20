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

const solution = (input) => {
  let set = new Set();
  let inplen = input.length;
  for (let i = 0; i < inplen; i++) {
    for (let j = 1; j <= inplen - i; j++) {
      set.add(input.substr(i, j));
    }
  }
  let ans = set.size;
  console.log(ans);
};
