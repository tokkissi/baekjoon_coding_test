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
  let amem = inp.shift().split(" ");
  let bmem = inp.shift().split(" ");
  let scoremem = inp.shift().split(" ");
  let ascore = 0;
  let bscore = 0;
  let ans;

  for (el of scoremem) {
    for (a of amem) {
      if (el === a) {
        ascore++;
      }
    }
    for (b of bmem) {
      if (el === b) {
        bscore++;
      }
    }
  }
  if (ascore > bscore) {
    ans = "A";
  } else if (ascore < bscore) {
    ans = "B";
  } else {
    ans = "TIE";
  }
  console.log(ans);
};
