const { arrayBuffer } = require("stream/consumers");

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

const solution = (input) => {
  input.shift();
  let arr = input.map((el) => Number(el));
  arr.sort((a, b) => b - a);
  let arrlen = arr.length;
  let sum = 0;

  for (let i = 0; i < arrlen; i++) {
    if (i % 3 === 2) {
      continue;
    }
    sum += arr[i];
  }
  console.log(sum);
};
