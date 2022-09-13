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
  let [n, m] = inp[0].split(":").map((el) => Number(el));
  let gcd = (a, b) => {
    while (b > 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  let num = gcd(n, m);
  console.log(`${Number(n / num)}:${Number(m / num)}`);
};
