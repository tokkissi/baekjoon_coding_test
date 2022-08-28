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
  let [n, m] = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  const map = new Map();
  for (let i = 0; i < n; i++) {
    let site = inp[i].split(" ")[0];
    let pw = inp[i].split(" ")[1];
    map.set(site, pw);
  }
  const find = inp.slice(n);
  let ans = [];
  find.forEach((eli) => {
    ans.push(map.get(eli));
  });
  console.log(ans.join("\n"));
};
