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
  let n = Number(inp[0]);
  let inparr = inp[1].split(" ").map((el) => Number(el));
  let narr = [];
  let isused = Array(n + 4).fill(0);
  let sumset = new Set();

  const bt = (k) => {
    if (k === n) {
      let sum = 0;
      for (let i = 0; i < narr.length - 1; i++) {
        sum += Math.abs(narr[i] - narr[i + 1]);
      }
      sumset.add(sum);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!isused[i]) {
        isused[i] = 1;
        narr.push(inparr[i]);
        bt(k + 1);
        narr.pop();
        isused[i] = 0;
      }
    }
  };
  bt(0);
  let ansarr = Array.from(sumset);
  let maxi = Math.max(...ansarr);
  console.log(maxi);
};
