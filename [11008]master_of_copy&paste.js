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
  let arr = [];
  for (el of inp) {
    arr.push(el.split(" "));
  }
  let ans = [];
  for (el of arr) {
    let cplen = el[1].length;
    let cnt = 0;
    for (let i = 0; i < el[0].length; i++) {
      let pos = el[0].indexOf(el[1], i);
      if (pos === -1) {
        break;
      } else {
        cnt++;
        i = pos + cplen - 1;
      }
    }
    ans.push(el[0].length - cnt * cplen + cnt);
  }
  console.log(ans.join("\n"));
};
