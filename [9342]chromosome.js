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
  let regex = /^[A-F]?A+F+C+[A-F]?$/;
  let ans = [];
  for (el of inp) {
    if (regex.test(el)) {
      ans.push("Infected!");
    } else {
      ans.push("Good");
    }
  }
  console.log(ans.join("\n"));
};
