const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  input = Number(line);
});

readline.on("close", () => {
  solution(input);
  process.exit();
});

const solution = (n) => {
  // bottom-top 방식의 다이나믹 프로그래밍을 위해 해당 수를 인덱스로 갖고 최소 연산값을 값으로 갖는 배열을 만든다
  const dp = new Array(n + 4); // 배열 크기에 약간의 여유를 주자
  // 규칙을 찾기위해 bottom 부터 채워나간다. 규칙에 적용 되기 전은 예외로 둬야하니 냅둔다
  dp[1] = 0;
  dp[2] = dp[1] + 1;
  dp[3] = Math.min(dp[1] + 1, dp[2] + 1);
  // dp[4] 이후로는 규칙에 수렴하므로 주석처리
  // dp[4] = Math.min(dp[4-1] + 1, dp[4/2] + 1);
  // dp[5] = Math.min(dp[5-1]+1)
  // dp[6] = Math.min(dp[6/2] + 1, dp[6/3] + 1, dp[6-1]+1)
  // dp[7] = Math.min(dp[7-1]+1)
  // dp[8] = Math.min(dp[8/2]+1, dp[8-1]+1)
  // dp[9] = Math.min(dp[9/3]+1, dp[9-1]+1)
  // dp[10] = Math.min(dp[10/2]+1, dp[10-1]+1)

  //찾은 규칙에 맞게 반복문으로 배열을 채워 나간다
  for (let i = 4; i <= n; i++) {
    // 2로도 3으로도 나누어 떨어지는 수는 이전 경우가 3가지 경우를 가진다
    if (i % 2 === 0 && i % 3 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i / 3] + 1, dp[i - 1] + 1);
    } else if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i - 1] + 1);
    } else if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i - 1] + 1);
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  // 배열로 저장한 n 일때의 연산 최소값을 출력한다
  console.log(dp[n]);
};
