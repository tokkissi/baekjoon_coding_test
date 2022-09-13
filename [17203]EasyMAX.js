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
  inp.shift();
  let base = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let arr = [];
  for (let i = 1; i < base.length; i++) {
    arr.push(Math.abs(base[i] - base[i - 1]));
  }
  let ans = [];
  for (el of inp) {
    let [tn, tm] = el.split(" ").map((el) => Number(el));
    let n = tn - 1;
    let m = tm - 1;
    let sum = 0;
    for (let i = n; i < m; i++) {
      sum += arr[i];
    }
    ans.push(sum);
  }
  console.log(ans.join("\n"));
};
