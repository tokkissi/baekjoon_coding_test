let input;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = Number(line);
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let q = [];
  let out = [];
  for (let i = 1; i <= inp; i++) {
    q.push(i);
  }
  while (q.length !== 1) {
    out.push(q.shift());
    q.push(q.shift());
  }
  out.push(q[0]);
  let ans = out.join(" ");
  console.log(ans);
};
