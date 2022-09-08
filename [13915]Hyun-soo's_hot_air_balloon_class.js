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
  let ans = [];
  while (inp.length !== 0) {
    let n = Number(inp.shift());
    let ntemp = new Set();
    for (let i = 0; i < n; i++) {
      let temp = [];
      for (el of inp.shift()) {
        temp.push(el);
      }
      temp.sort();
      let inset = new Set();
      for (el of temp) {
        inset.add(el);
      }
      ntemp.add(JSON.stringify(Array.from(inset)));
    }
    ans.push(ntemp.size);
  }
  console.log(ans.join("\n"));
};
