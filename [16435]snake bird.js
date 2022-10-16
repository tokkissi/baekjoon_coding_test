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
  let [n, l] = inp[0].split(" ").map((el) => Number(el));
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(inp[1].split(" ")[i]);
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (arr[i] <= l) {
      l += 1;
    }
  }
  console.log(l);
};
