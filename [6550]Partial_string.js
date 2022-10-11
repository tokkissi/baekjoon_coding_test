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
  let ans = [];
  for (el of inp) {
    let [s, t] = el.split(" ");
    let temp = s.split("").join(".*");
    temp += `.*`;
    let regex = new RegExp(`${temp}`);
    if (regex.test(t)) {
      ans.push("Yes");
    } else {
      ans.push("No");
    }
  }
  console.log(ans.join("\n"));
};
