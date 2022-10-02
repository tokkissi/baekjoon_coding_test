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
  // let n = Number(inp[0]);
  let n = inp[0];
  let oj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  };

  for (el of n) {
    if (el === "9") {
      oj["6"]++;
    } else {
      oj[el]++;
    }
  }
  let karr = Object.keys(oj);
  let filtered = karr.filter((el) => {
    return el !== "6";
  });
  let narr = filtered.map((el) => {
    return oj[el];
  });
  narr.push(Math.ceil(oj["6"] / 2));
  console.log(Math.max(...narr));
};
