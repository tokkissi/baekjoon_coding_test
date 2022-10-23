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
  let [n, m] = inp
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let board = [];
  let cnt = 0;
  let maxArea = 0;
  // 상하좌우 이동 시 좌표 변화량 배열 2개로 설정
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, -1, 1];

  // 2차원 보드에 입력 값 넣기
  for (let i = 0; i < inp.length; i++) {
    board[i] = inp[i].split(" ").map((el) => Number(el));
  }
  // console.log(board);

  function dfs(y, x) {
    // 첫 좌표 포함의 넓이 1
    let area = 1;
    // 상하좌우로 좌표가 이동할때의 경우
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      // 새 좌표가 보드 밖을 나간다면 continue 한다
      if (ny < 0 || nx < 0 || ny >= n || nx >= m) {
        continue;
      }
      // 0이면 색칠이 안된 부분이거나 이미 그림으로 파악된 부분이므로 continue;
      if (board[ny][nx] === 0) {
        continue;
      }
      // 새 좌표의 상태를 0으로 바꿔주어 중복으로 체크되지 않게 한다
      board[ny][nx] = 0;
      // 현재 좌표의 넓이(1) + 현재 좌표에서 이동 가능한 새 좌표에서의 넓이 === 이동 가능한 전체 넓이. 이를 재귀로 표현함
      area += dfs(ny, nx);
    }
    return area;
  }

  //보드를 돌며 그림의 넓이와 그림 수를 확인한다
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 보드에 0으로 체크되어있다면 색칠 안되거나 중복체크 방지를 위한 것이므로 패스
      if (board[i][j] === 0) {
        continue;
      }
      // 1이라면 시작 좌표로 설정, 그에 따라 지나간 길이니 0으로 바꿔줌
      board[i][j] = 0;
      // 지도 개수로 카운트+1
      cnt++;
      // dfs 로 뻗어나가 구한 넓이를 최대 넓이와 비교, 갱신한다
      maxArea = Math.max(maxArea, dfs(i, j));
    }
  }
  console.log(`${cnt}\n${maxArea}`);
};
