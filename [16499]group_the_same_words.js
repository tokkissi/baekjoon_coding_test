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
  let inparr = [];
  inp.forEach((el) => {
    let temp = [];
    for (ch of el) {
      temp.push(ch);
      temp.sort();
    }
    inparr.push(temp.join(""));
  });
  let set = new Set(inparr);
  console.log(set.size);
};
