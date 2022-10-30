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
  let arr = Array(1000).fill(1);
  let cnt = 0;

  // 숫자가 중복이거나, 0을 포함하는 숫자는 제외
  for (let i = 123; i < 1000; i++) {
    let si = String(i);
    if (si[0] === si[1] || si[1] === si[2] || si[2] === si[0]) {
      arr[i] = 0;
    }
    let stri = String(i);
    if (stri[0] === "0" || stri[1] === "0" || stri[2] === "0") {
      arr[i] = 0;
    }
  }

  // 매 줄을 돌며 조건에 안맞는 수는 걸러낸다
  for (el of inp) {
    let [num, s, b] = el.split(" ");
    let ns = Number(s);
    let nb = Number(b);

    for (let i = 123; i < 1000; i++) {
      let scnt = 0;
      let bcnt = 0;
      let si = String(i);

      // 걸러지지 않은 수만 체크한다
      if (arr[i]) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            // 자리수와 숫자가 모두 같으면 스트라이크
            if (j === k && num[j] === si[k]) {
              scnt++;
            }
            // 자리수는 다르고 숫자만 같으면 볼
            if (j !== k && num[j] === si[k]) {
              bcnt++;
            }
          }
        }

        // 입력 숫자와 스크라이크, 볼 수가 다르면
        if (scnt !== ns || bcnt !== nb) {
          arr[i] = 0;
        }
      }
    }
  }
  for (let i = 123; i < 1000; i++) {
    if (arr[i]) {
      cnt++;
    }
  }
  console.log(cnt);
};
