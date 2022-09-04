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
  let [m, n] = inp.split(" ").map((el) => Number(el));
  const alpha = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (i < 10) {
      arr.push([alpha[i], i]);
    } else {
      let temp = "";
      temp += alpha[Math.floor(i / 10)];
      temp += "";
      temp += alpha[i % 10];
      arr.push([temp, i]);
    }
  }
  arr.sort();
  let ans = [];
  for (el of arr) {
    ans.push(el[1]);
  }
  let answer = "";
  for (let i = 1; i < ans.length; i++) {
    answer += ans[i - 1];
    if (i % 10 === 0) {
      answer += "\n";
    } else {
      answer += " ";
    }
  }
  answer += ans[ans.length - 1];
  console.log(answer);
};
