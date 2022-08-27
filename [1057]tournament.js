let input;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = line;
  readline.close();
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (inp) => {
  let inparr = inp.split(" ").map((el) => Number(el));
  let kim = inparr[1];
  let lim = inparr[2];
  let cnt = 0;

  while (kim !== lim) {
    kim = Math.ceil(kim / 2);
    lim = Math.ceil(lim / 2);
    cnt++;
  }

  console.log(cnt);
};
