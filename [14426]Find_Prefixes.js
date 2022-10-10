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
  let testarr = [];
  let ori = m;

  for (let i = n; i < n + m; i++) {
    let temp = new RegExp(`^(${inp[i]})`);
    testarr.push(temp);
  }
  for (let j = 0; j < testarr.length; j++) {
    for (let i = 0; i < n; i++) {
      if (testarr[j].test(inp[i])) {
        m--;
        break;
      }
    }
  }
  console.log(ori - m);
};
