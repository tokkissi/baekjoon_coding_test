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
  inp.pop();
  let regex1 = /[aeiou]/;
  let regex2 = /[aeiou]{3}|[^aeiou]{3}/;
  let regex3 = /([a-df-np-z])\1/;
  let ans = [];
  for (el of inp) {
    if (regex1.test(el) && !regex2.test(el) && !regex3.test(el)) {
      ans.push(`<${el}> is acceptable.`);
    } else {
      ans.push(`<${el}> is not acceptable.`);
    }
  }
  console.log(ans.join("\n"));
};
