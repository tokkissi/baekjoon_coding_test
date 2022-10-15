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
  let ori = inp[0];
  let xcnt = 0;
  let ans = [];
  for (let i = 0; i < ori.length; i++) {
    if (ori[i] === ".") {
      ans.push(".");
      continue;
    } else if ((ori[i] !== "." && ori[i + 1] === ".") || i + 1 === ori.length) {
      xcnt++;

      let ar = "AAAA";
      let br = "BB";
      let part = "";
      if (xcnt % 2 !== 0) {
        return console.log(-1);
      } else {
        if (xcnt % 4 === 0) {
          ans.push(ar.repeat(xcnt / 4));
        } else {
          part += ar.repeat((xcnt - 2) / 4);
          part += br;
          ans.push(part);
        }
      }

      xcnt = 0;
      continue;
    } else {
      xcnt++;
    }
  }
  console.log(ans.join(""));
};
