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
  let ans;
  let regex = /^(pi|ka|chu)*$/;
  if (regex.test(str)) {
    ans = "YES";
  } else {
    ans = "NO";
  }
  console.log(ans);
};
