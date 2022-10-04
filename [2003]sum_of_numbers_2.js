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
  let [n, m] = inp[0].split(" ").map((el) => Number(el));
  let arr = inp[1].split(" ").map((el) => Number(el));
  let cnt = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (true) {
    if (sum >= m) {
      sum -= arr[left++];
    } else if (right === n) {
      break;
    } else {
      sum += arr[right++];
    }
    if (sum === m) {
      cnt++;
    }
  }
  console.log(cnt);
};
