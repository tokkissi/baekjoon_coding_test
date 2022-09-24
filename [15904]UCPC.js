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
  let str = inp[0];
  let regex = /U.*C.*P.*C/;
  let ans;
  if (regex.test(str)) {
    ans = "I love UCPC";
  } else {
    ans = "I hate UCPC";
  }
  console.log(ans);
};
