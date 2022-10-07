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
  let [n, k] = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let arr = inp.map((el) => Number(el));
  let arrlen = arr.length;

  let temp = k;
  let cnt = 0;

  for (let i = arrlen - 1; i >= 0; i--) {
    if (temp === 0) {
      break;
    }
    if (Math.floor(temp / arr[i]) < 0) {
      continue;
    }

    let cal = Math.floor(temp / arr[i]);
    temp -= cal * arr[i];
    cnt += cal;
  }
  console.log(cnt);
};
