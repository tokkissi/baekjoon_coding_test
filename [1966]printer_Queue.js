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
  let arr;
  let ans = [];
  let n;
  let m;
  for (let i = 1; i < inp.length; i++) {
    if (i % 2 === 1) {
      [n, m] = inp[i].split(" ").map((el) => Number(el));
    }
    if (i % 2 === 0) {
      arr = inp[i].split(" ");
      // 깊은 복사
      let q = [...arr];
      // 같은 수가 있어도 목표를 찾기 위한 q와 쌍둥이 배열
      let chk = Array(q.length).fill(0);
      chk[m] = 1;
      let target = Number(arr[m]);
      let cnt = 0;

      // 배열에 수가 남아있지 않거나 조건으로 탈출하기 전까지 계속 수행해라
      while (q.length) {
        let maxi = Math.max(...q);
        let idx = q.indexOf(String(maxi));
        let chkidx = chk.indexOf(1);

        // 배열 중 최대값이 목표수가 아니라면 최대값이 맨 앞이 나올때까지 돌린다
        if (maxi !== target) {
          for (let i = 0; i < idx; i++) {
            q.push(q.shift());
            chk.push(chk.shift());
          }
          // 최대값이 목표값과 같다면
        } else {
          if (idx === chkidx) {
            cnt++;
            break; // 그 배열은 더 돌 필요 없다
            // 찾은 최대값들 중 목표 요소가 맨 앞이 아니라면
          } else {
            let samecnt = 0;
            for (let j = 0; j < chkidx; j++) {
              if (q[j] === arr[m]) {
                samecnt++;
              }
            }
            cnt += samecnt + 1;
            break;
          }
        }

        // 맨 앞의 수는 배열 중 최대값이다. 빼주고 인쇄 수를 늘려주자
        q.shift();
        chk.shift();
        cnt++;
      }
      ans.push(cnt);
    }
  }
  console.log(ans.join("\n"));
};
