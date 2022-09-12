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
  let a = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let b = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let set = new Set(a);
  for (el of b) {
    set.delete(el);
  }
  if (set.size === 0) {
    console.log(0);
  } else {
    let arr = Array.from(set);
    let ans = arr.sort((a, b) => a - b);
    console.log(ans.length);
    console.log(ans.join(" "));
  }
};
