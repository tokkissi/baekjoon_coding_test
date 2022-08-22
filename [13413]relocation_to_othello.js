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
  let ans = [];
  for (let i = 0; i < n; i++) {
    // 각 오셀로별 주어진 조건
    let bef = inp[i * 3 + 2];
    let aft = inp[i * 3 + 3];
    let strlen = bef.length;
    let bcnt = 0;
    let wcnt = 0;

    for (let j = 0; j < strlen; j++) {
      if (bef[j] !== aft[j]) {
        if (bef[j] === "B") {
          bcnt++;
        } else {
          wcnt++;
        }
      }
    }
    ans = Math.max(bcnt, wcnt);
    console.log(ans);
  }
};
