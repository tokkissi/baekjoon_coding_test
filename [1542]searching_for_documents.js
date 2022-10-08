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
  let substr = inp[1];
  let substrlen = substr.length;
  let cnt = 0;

  while (true) {
    let chk = str.indexOf(substr);
    let temp = "";
    if (chk === -1) {
      break;
    }
    cnt++;
    temp += str.slice(chk + substrlen);
    str = temp;
  }
  console.log(cnt);
};
