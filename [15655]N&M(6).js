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
  let input = inp.shift().split(" ");
  let m = Number(input[1]);
  let arr = inp[0].split(" ").map((el) => Number(el));

  arr.sort((a, b) => a - b);
  let arrlen = arr.length;
  let arrisused = Array(arrlen).fill(0);
  let ans = [];
  let answer = [];

  const bt = (k, t) => {
    if (ans.length === m) {
      answer.push(ans.join(" "));
      return;
    }
    for (let i = t; i < arrlen; i++) {
      if (arrisused[i] === 0) {
        arrisused[i] = 1;
        ans[k] = arr[i];
        bt(k + 1, i);
        arrisused[i] = 0;
        ans.pop();
      }
    }
  };
  bt(0, 0);
  console.log(answer.join("\n"));
};
