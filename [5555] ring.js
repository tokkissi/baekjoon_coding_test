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
  let piece = inp.shift();
  inp.shift();
  let cnt = 0;
  let regexstr = new RegExp(`(${piece})`);
  for (el of inp) {
    let temp = el + el;
    let chk = regexstr.test(temp);
    if (chk) {
      cnt++;
    }
  }
  console.log(cnt);
};
