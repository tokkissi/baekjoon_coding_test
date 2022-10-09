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
  for (el of inp) {
    let [n, m] = el.split(" ").map((el) => Number(el));

    let nn = m - n;
    let ans = BigInt(1);

    if (2 * n > m) {
      n = m - n;
    }
    for (let i = 0; i < n; i++) {
      ans *= BigInt(m - i);
    }
    for (let i = 1; i <= n; i++) {
      ans /= BigInt(i);
    }
    console.log(Number(ans));
  }
};
