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
  const n = Number(inp[0]);
  const employees = {};
  let inplen = inp.length;

  for (let i = 1; i < inplen; i++) {
    let [name, state] = inp[i].split(" ");

    if (employees[name]) {
      employees[name] = 0;
    } else {
      employees[name] = -1;
    }
  }

  let ks = Object.keys(employees);
  let ans = ks.filter((k) => (employees[k] ? true : false));
  ans.sort().reverse();
  console.log(ans.join("\n"));
};
