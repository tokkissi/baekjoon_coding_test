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

const solution = (input) => {
  let n = Number(input[0]);
  let arr1 = input[1].split(" ").map((el) => Number(el));
  let arr2 = input[3].split(" ").map((el) => Number(el));

  let ans = [];
  arr1.sort((a, b) => a - b);

  const binary = (a, arr, start, end) => {
    let m = Math.floor((start + end) / 2);
    if (start > end) {
      return 0;
    }
    if (a === arr[m]) {
      return 1;
    }
    if (a < arr[m]) {
      return binary(a, arr, start, m - 1);
    } else {
      return binary(a, arr, m + 1, end);
    }
  };

  for (el of arr2) {
    ans.push(binary(el, arr1, 0, arr1.length - 1));
  }
  console.log(ans.join("\n"));
};
