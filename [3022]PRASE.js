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
  let n = Number(inp.shift());
  let oj = {};
  let cnt = 0;

  for (let i = 0; i < inp.length; i++) {
    if (oj[inp[i]] === undefined) {
      oj[inp[i]] = 1;
    } else {
      oj[inp[i]]++;
      let others = 0;
      for (el in oj) {
        if (el !== inp[i]) {
          others += oj[el];
        }
      }
      if (oj[inp[i]] > others + 1) {
        cnt++;
      }
    }
  }
  console.log(cnt);
};
