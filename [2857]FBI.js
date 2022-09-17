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
  let regex = /FBI/;
  let cnt = [];
  for (let i = 0; i < inp.length; i++) {
    let idx = inp[i].search(regex);
    if (idx !== -1) {
      cnt.push(i + 1);
    }
  }
  if (cnt.length === 0) {
    console.log("HE GOT AWAY!");
  } else {
    console.log(cnt.join(" "));
  }
};
