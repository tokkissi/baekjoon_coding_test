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
  // 케이스 수
  let cases = Number(inp[0]);
  let curline = 1;
  let ans = [];
  while (cases) {
    // 케이스 별로 입력 조건 설정
    let [m, n, k] = inp[curline].split(" ").map((el) => Number(el));
    // console.log([m, n, k]);
    // 지렁이 수
    let cnt = 0;
    let dx = [0, 0, -1, 1];
    let dy = [1, -1, 0, 0];

    // 2차원 빈 좌표 그리기
    let board = Array.from(Array(n), () => Array(m).fill(0));
    // console.log(board);

    // 좌표에 배추 위치 설정
    for (let i = curline + 1; i < curline + k + 1; i++) {
      // console.log(inp[i]);
      let [x, y] = inp[i].split(" ").map((el) => Number(el));
      board[y][x] = 1;
    }
    // console.log("------");

    // 보드를 순회하며 배추가 있다면 dfs 로 따라가고, 지렁이 수++
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j]) {
          dfs(i, j);
          cnt++;
        }
      }
    }

    function dfs(y, x) {
      // 현재 위치의 배추는 체크했으니 보드에서 제외
      board[y][x] = 0;
      // 상하좌우 새 좌표 이동 시 경우 파악
      for (let dir = 0; dir < 4; dir++) {
        // 새 좌표 설정
        let ny = y + dy[dir];
        let nx = x + dx[dir];

        // 보드 밖으로 나가면 패스
        if (ny < 0 || nx < 0 || ny >= n || nx >= m) {
          continue;
        }
        // 새 좌표에 배추가 없다면 패스
        if (board[ny][nx] === 0) {
          continue;
        }

        // 새 좌표에서 dfs 실시
        dfs(ny, nx);
      }
    }

    // 입력 조건 줄 재설정
    curline += k + 1;
    cases--;
    // console.log(board);
    ans.push(cnt);
  }
  console.log(ans.join("\n"));
};
