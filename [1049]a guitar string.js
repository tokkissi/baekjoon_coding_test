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
  let n = Number(inp.shift().split(" ")[0]);
  let setarr = [];
  let piecearr = [];

  for (el of inp) {
    let [set, piece] = el.split(" ").map((el) => Number(el));
    setarr.push(set);
    piecearr.push(piece);
  }
  let minset = Math.min(...setarr);
  let minpiece = Math.min(...piecearr);
  let ans = Math.min(
    Math.ceil(n / 6) * minset,
    Math.floor(n / 6) * minset + (n % 6) * minpiece,
    n * minpiece
  );

  console.log(ans);
};
