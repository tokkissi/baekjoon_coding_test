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
  let n = Number(inp[0][0]);
  let m = Number(inp[0][2]);
  let inparr = inp[1].split(" ").map((el) => Number(el));
  let ar = new Array(10).fill(0);
  let isused = new Array(10).fill(0);

  inparr.sort((a, b) => a - b);
  const bt = (k) => {
    if (k === m) {
      let temp = [];
      for (let i = 0; i < m; i++) {
        temp.push(ar[i]);
      }
      console.log(temp.join(" "));
      return;
    }
    for (let i = 0; i < n; i++) {
      let t = inparr[i];
      if (!isused[t]) {
        ar[k] = t;
        isused[t] = 1;
        bt(k + 1);
        isused[t] = 0;
      }
    }
  };

  bt(0);
};
