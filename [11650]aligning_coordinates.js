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
  let ans = [];
  for (el of inp) {
    let temp = el.split(" ").map((em) => Number(em));
    ans.push(temp);
  }
  ans.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let answer = [];
  for (el of ans) {
    answer.push(el.join(" "));
  }
  console.log(answer.join("\n"));
};
