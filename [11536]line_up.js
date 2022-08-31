const { json } = require("stream/consumers");

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

  let inc = Array.from(inp);
  inc.sort();

  let dec = Array.from(inc);
  dec.reverse();

  inc = JSON.stringify(inc);
  dec = JSON.stringify(dec);
  inp = JSON.stringify(inp);

  if (inp === inc) {
    console.log("INCREASING");
  } else if (inp === dec) {
    console.log("DECREASING");
  } else {
    console.log("NEITHER");
  }
};
