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
  let strlen = str.length;
  let n = Number(str[0]);
  let ans = [];
  // 첫문자를 첫 시작 숫자로 잡고, 1씩 큰 수를 문자열로 붙이고 원문자열과 비교해서 첫 문자를 늘려가며 원문자와 같은 문자열을 만드는 수를 찾는다
  for (let i = n; i < 1000; i++) {
    let s = "";
    for (let j = i; j < 1000; j++) {
      s += String(j);
      // 쌓은 문자열 s 와 원 문자열 str 의 길이가 같을때
      if (s.length === strlen) {
        // s가 원문자열과 같다면 시작 숫자와 끝 숫자를 출력하자
        if (s === str) {
          ans.push(i);
          ans.push(j);
          console.log(ans.join(" "));
          return;
        }
        // 쌓은 문자열이 원 문자열보다 길면 시작 숫자 i 를 늘려준다
      } else if (s.length > strlen) {
        break;
      }
    }
  }
};
