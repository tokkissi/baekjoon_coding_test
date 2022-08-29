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
  let n = inp.shift();
  let obj = {};
  for (el of inp) {
    let temp = el.split(".")[1];
    if (!obj[temp]) {
      obj[temp] = 1;
    } else {
      obj[temp]++;
    }
  }
  let ans = Object.entries(obj).sort();
  let answer = "";
  for (eli of ans) {
    answer += `${eli.join(" ")}\n`;
  }
  console.log(answer);
};
