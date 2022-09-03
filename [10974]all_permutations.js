let input;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = line;
  readline.close();
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let n = Number(inp);
  let arr = Array(n).fill(0);
  let isused = Array(10).fill(false);
  let ans = [];
  let answer = [];

  const bt = (k) => {
    if (n === k) {
      ans = arr.join(" ");
      answer.push(ans);
    } else {
      for (let i = 1; i <= n; i++) {
        if (!isused[i]) {
          arr[k] = i;
          isused[i] = true;
          bt(k + 1);
          isused[i] = false;
        }
      }
    }
  };
  bt(0);
  console.log(answer.join(" \n"));
};
