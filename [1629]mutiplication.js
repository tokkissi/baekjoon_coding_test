const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = line.split(" ").map((el) => BigInt(el));
  readline.close();
});
readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (input) => {
  [a, b, c] = input;
  const POW = (a, b, c) => {
    if (b === 1n) {
      return a % c;
    }
    let val = POW(a, BigInt(b / 2n), c);
    val = (val * val) % c;
    if (b % 2n === 0n) {
      return val;
    }
    return (val * a) % c;
  };
  console.log(parseInt(POW(a, b, c)));
};
