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
  let m = Number(inp[2]);
  let arr = inp[1].split(" ").map((el) => Number(el));
  let sumarr = [];

  for (let i = 0; i < m; i++) {
    let a = inp[i + 3].split(" ").map((el) => Number(el))[0];
    let b = inp[i + 3].split(" ").map((el) => Number(el))[1];
    let sum = 0;

    for (let j = a; j <= b; j++) {
      sum += arr[j - 1];
    }
    sumarr.push(sum);
  }
  let ans = sumarr.join("\n");
  console.log(ans);
};
