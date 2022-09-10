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
  let cnt = 0;
  let set = new Set();
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] === "ENTER") {
      cnt += set.size;
      set.clear();
      continue;
    }
    set.add(inp[i]);
    if (i === inp.length - 1) {
      cnt += set.size;
    }
  }
  console.log(cnt);
};
