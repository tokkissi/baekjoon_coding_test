#include <bits/stdc++.h>
using namespace std;

string board[1004];
int dist1[1004][1004]; // 불의 전파 시간
int dist2[1004][1004]; // 지훈이의 이동 시간
int n, m;
int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, -1, 1};

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	cin >> n >> m;
	for (int i = 0; i < n; i++)
	{
		// 문자열이므로 첫 위치 + 문자 개수 m까지를 -1로 채운다
		fill(dist1[i], dist1[i] + m, -1);
		fill(dist2[i], dist2[i] + m, -1);
	}
	for (int i = 0; i < n; i++)
	{
		cin >> board[i];  // n줄의 문자열을 입력받는다
	}
	queue<pair<int, int>> Q1;  // 불의 전파 시간을 위한 큐
	queue<pair<int, int>> Q2;  // 지훈이의 이동 시간을 위한 큐
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			// 불의 시작 위치들을 큐에 넣는다
			if (board[i][j] == 'F')
			{
				Q1.push({i, j});
				dist1[i][j] = 0;  // 시작 위치의 거리는 0 으로 둔다
			}
			if (board[i][j] == 'J')
			{
				Q2.push({i, j});
				dist2[i][j] = 0;
			}
		}
	}
	//불의 전파에 대한 BFS
	while (!Q1.empty())
	{
		auto cur = Q1.front();
		Q1.pop();
		// 상하좌우로 이동 가능한 좌표 구하기
		for (int dir = 0; dir < 4; dir++)
		{
			int nx = cur.first + dx[dir];
			int ny = cur.second + dy[dir];
			// 이동 후 좌표가 보드 밖을 넘어가면 안된다
			if (nx < 0 || nx >= n || ny < 0 || ny >= m)
			{
				continue;
			}
			// 이동 후 좌표가 불이 이미 지나간 곳이거나, #(벽)이면 안된다
			if (dist1[nx][ny] >= 0 || board[nx][ny] == '#')
			{
				continue;
			}
			// 이동 후 거리 = 이동 전 거리 + 1
			dist1[nx][ny] = dist1[cur.first][cur.second] + 1;
			// 이동 가능하면 불의 큐에 넣는다
			Q1.push({nx, ny});
		}
	}
	while (!Q2.empty())
	{
		auto cur = Q2.front();
		Q2.pop();
		// 지훈의 상하좌우 이동 가능 좌표 구하기
		for (int dir = 0; dir < 4; dir++)
		{
			int nx = cur.first + dx[dir];
			int ny = cur.second + dy[dir];
			// 범위를 벗어나는 것은 탈출에 성공했다는 것. 큐에 들어가는 순서는
			// 거리 값의 오름차순이므로 최초 탈출 시간을 출력하면 된다
			if (nx < 0 || nx >= n || ny < 0 || ny >= m)
			{
				// 탈출 전 위치의 거리 + 1 을 출력하고 리턴한다
				cout << dist2[cur.first][cur.second] + 1;
				return 0;
			}
			// 지훈이가 이미 지나갔었거나, #(벽)을 만나면 이동 불가
			if (dist2[nx][ny] >= 0 || board[nx][ny] == '#')
			{
				continue;
			}
			// 이동할 곳이 불의 -1이라는것은 불도 전파 불가능한 곳이니 지훈이도 못간다
			// 그러니 불은 전파됐어야 하고, 지훈이 불과 동시에 한 곳에 있을 수 없으므로
			// 지훈은 좌표에서 불의 시간(거리)보다 같으면 안되고 더 빨라야만(작아야만) 한다
			if (dist1[nx][ny] != -1 && dist1[nx][ny] <= dist2[cur.first][cur.second] + 1)
			{
				continue;

			}
			// 이동 가능하다면 이동한 곳의 거리는 이전 거리 + 1
			dist2[nx][ny] = dist2[cur.first][cur.second] + 1;
			// 이동 가능 좌표를 큐에 넣어준다
			Q2.push({nx, ny});
		}
	}
	// 범위 밖에 도달하여 리턴 하지 못했으므로 해당 행에 도달. 탈출 불가능 의미
	cout << "IMPOSSIBLE";
}