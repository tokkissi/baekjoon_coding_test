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
  let [n, len] = input[0].split(" ").map((el) => Number(el));
  // console.log(len);
  let arr = input[1].split(" ").map((el) => Number(el));
  let cnt = 0;

  // 오름차순으로 정렬
  arr.sort((a, b) => a - b);
  // 첫 누수를 시작 위치로 설정
  let pos = arr[0];

  for (let i = 1; i < n; i++) {
    // 테이프 길이가 부족하면
    if (len <= arr[i] - pos) {
      // 새 테이프를 사용해야하므로 cnt++
      cnt++;
      // 새 누수 지점을 시작 지점으로 재설정한다
      pos = arr[i];
    }
  }
  // 마지막 테이프 포함
  cnt++;
  console.log(cnt);
};
