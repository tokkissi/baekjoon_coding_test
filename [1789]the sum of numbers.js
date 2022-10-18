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
  let num = Number(input[0]);
  let sum = 0n;
  let n = 1n;
  let cnt = 0;

  while (true) {
    sum = sum + n;
    cnt++;
    // 합이 num 초과 시, 그 경우는 빼고 카운트를 멈춘다
    if (sum > num) {
      cnt--;
      break;
    }
    n = n + 1n;
  }
  console.log(cnt);
};
