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
  let oj = {};
  for (el of inp) {
    let str = JSON.stringify(el.split(" ").sort());
    if (oj[str]) {
      oj[str]++;
    } else {
      oj[str] = 1;
    }
  }
  let ojvalue = Object.values(oj);
  let ans = Math.max(...ojvalue);

  console.log(ans);
};
