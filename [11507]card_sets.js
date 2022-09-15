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
  let str = inp[0];
  let sub = "";
  let substr = [];
  let oj = {};
  for (let i = 0; i < str.length; i++) {
    if (sub.length === 3) {
      substr.push(sub);
      sub = "";
    }
    sub += str[i];
    if (i === str.length - 1) {
      substr.push(sub);
    }
  }
  let n = substr.length;
  let set = new Set(substr);
  let narr = Array.from(set);
  let m = narr.length;

  if (n !== m) {
    console.log("GRESKA");
  } else {
    let charr = ["P", "K", "H", "T"];
    let carr = [];
    for (el of narr) {
      let c = el[0];
      carr.push(c);
      let num = Number(el.slice(1));
      if (oj[c]) {
        oj[c]--;
      } else {
        oj[c] = 13 - 1;
      }
    }
    for (el of charr) {
      if (!carr.includes(el)) {
        oj[el] = 13;
      }
    }
    let ans = [];
    ans.push(oj["P"]);
    ans.push(oj["K"]);
    ans.push(oj["H"]);
    ans.push(oj["T"]);
    console.log(ans.join(" "));
  }
};
