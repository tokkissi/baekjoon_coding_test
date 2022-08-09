#include<bits/stdc++.h>
using namespace std;

int board[1004][1004];
int dist[1004][1004];
int n, m;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int min_dist = 0;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	queue<pair<int, int>> Q;
	
	cin >> m >> n;
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			cin >> board[i][j];
			if (board[i][j] == 1)
			{
				Q.push({i, j});
			}
			if (board[i][j] == 0)
			{
				dist[i][j] = -1; 
			}
		}
	}
	while (!Q.empty())
	{
		auto current = Q.front();
		Q.pop();
		for (int direction = 0; direction < 4; direction++)
		{
			int nx = current.first + dx[direction];
			int ny = current.second + dy[direction];
			if (nx < 0 || nx >= n || ny < 0 || ny >= m)
			{
				continue;
			}
			if (dist[nx][ny] >= 0)
			{
				continue;
			}
			dist[nx][ny] = dist[current.first][current.second] + 1;
			Q.push({nx, ny});
		}
	}
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < m; j++)
		{
			if (dist[i][j] == -1)
			{
				cout << -1;
				return 0;
			}
			min_dist = max(min_dist, dist[i][j]);
		}
	}
	cout << min_dist;
	
	return 0;
}
