#include <bits/stdc++.h>
using namespace std;

	int board[504][504];
	bool visited[504][504];
	int n, m;
	int dx[4] = {-1, 1, 0, 0};
	int dy[4] = {0, 0, -1, 1};

int main(){
	
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	int paints_num = 0;
	int max_area = 0;
	
	cin >> n >> m;
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			cin >> board[i][j];
		}
	}
	
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			if (board[i][j] == 0 || visited[i][j])
			{
				continue;
			}
			paints_num++;
			queue<pair<int, int>> Q;
			visited[i][j] = 1;
			Q.push({i, j});
			int area = 0;
			while (!Q.empty())
			{
				area++;
				pair<int, int> current;
				current = Q.front();
				Q.pop();
				for (int direction = 0; direction < 4; direction++)
				{
					int nx = current.first + dx[direction];
					int ny = current.second + dy[direction];
					if (nx < 0 || nx >= n || ny < 0 || ny >= m)
					{
						continue;
					}
					if (visited[nx][ny] || board[nx][ny] != 1)
					{
						continue;
					}
					visited[nx][ny] = 1;
					Q.push({nx, ny});
				}
			}
			max_area = max(max_area, area);
		}
	}
	cout << paints_num << '\n' << max_area;
	
	return 0;
}
