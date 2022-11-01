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
  let ans = [];
  let regexstr = new RegExp(`(${inp})`);
  // let regex = new RegExp(regexstr);
  for (el of inp) {
    let chk = regexstr.test(el);
    ans.push(chk);

    console.log(chk);
  }
  console.log(ans);
};
