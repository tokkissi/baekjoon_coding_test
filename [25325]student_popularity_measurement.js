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
  let name = inp.shift().split(" ");
  let oj = {};
  for (el of name) {
    oj[el] = 0;
  }
  for (el of inp) {
    el.split(" ").map((eli) => oj[eli]++);
  }
  let temp = [];
  for (el of Object.keys(oj)) {
    temp.push([el, oj[el]]);
  }
  temp.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  let ans = [];
  for (el of temp) {
    ans.push(el.join(" "));
  }
  console.log(ans.join("\n"));
};
