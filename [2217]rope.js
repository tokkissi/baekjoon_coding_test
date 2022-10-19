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
  arr.sort((a, b) => a - b);
  let sumarr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] * (arr.length - i);
    sumarr.push(sum);
  }
  let maxi = Math.max(...sumarr);
  console.log(maxi);
};
