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
  inp.pop();

  let curline = 0;
  let ans = [];

  while (true) {
    // 새로 갱신될 다음 입력 조건 줄 수가 입력 줄보다 크다면 break
    let cnt = 0;
    console.log("start");
    let templine = curline;
    if (curline === inp.length) {
      break;
    }

    let dy = [-1, -1, -1, 0, 1, 1, 1, 0];
    let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
    console.log(inp[curline].split(" "));
    // 조건 줄에서 조건 변수로 설정하기
    let [w, h] = inp[curline].split(" ").map((el) => Number(el));

    // 보드에 조건 입력하기
    let board = Array.from(Array(h), () => Array(w).fill(0));
    console.log(board);
    for (let i = curline + 1; i < curline + h + 1; i++) {
      let yline = i - curline - 1;
      let xline = inp[i].split(" ").map((el) => Number(el));
      console.log("xline: ", xline);
      for (let j = 0; j < xline.length; j++) {
        board[yline][j] = xline[j];
      }
    }
    console.log("---");
    console.log(board);

    for (let i = templine + 1; i < templine + h + 1; i++) {
      for (let j = 0; j < w; j++) {
        console.log("yogiyo: ", board[i][j]);
        if (board[i][j]) {
          console.log("i: ", i, "// j : ", j);
          cnt++;
          dfs(i, j);
        }
      }
    }

    function dfs(y, x) {
      board[y][x] = 0;

      for (let i = 0; i < 8; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny < 0 || nx < 0 || ny >= h || nx >= w) {
          continue;
        }
        if (board[ny][nx] === 0) {
          continue;
        }

        dfs(ny, nx);
      }
    }
    // 다음 줄을 현재 조건 줄로 갱신
    curline += h + 1;
    ans.push(cnt);
    console.log("한바퀴");
  }
  console.log(ans.join("\n"));
};
