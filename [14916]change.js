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
  let n = Number(inp[0]);
  let cnt = 0;
  let w5 = Math.floor(n / 5);
  let i = w5;

  while (true) {
    let tn = n;

    // 5원짜리가 없는 경우까지 모두 센다면
    if (i < 0) {
      cnt = -1;
      break;
    }

    if ((tn - 5 * i) % 2 === 0) {
      let rest = tn - 5 * i;
      cnt += i + rest / 2;
      break;
    }

    i--;
  }

  console.log(cnt);
};
