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
  let hyped = str.replace(/-/g, " ");
  let spaced = hyped.split(" ");
  let cnt = spaced.length;
  let regex = /^(c|j|n|m|t|s|l|d|qu)'(a|e|i|o|u|h)/;
  for (el of spaced) {
    if (regex.test(el)) {
      cnt++;
    }
  }
  console.log(cnt);
};
