#include <bits/stdc++.h>
using namespace std;

int n, m;
int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, -1, 1};
int dist[104][104];
string board[104];

int main(){
	
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	cin >> n >> m;
	for (int i = 0; i < n; i++)
	{
		cin >> board[i];
	}
	for (int i = 0; i < n; i++)
	{
		fill(dist[i], dist[i] + m, -1);
	}
	queue<pair<int, int>> Q;
	Q.push({0, 0});
	dist[0][0] = 0;
	while (!Q.empty())
	{
		auto current = Q.front();
		Q.pop();
		for (int direction = 0; direction <4; direction++)
		{
			int nx = current.first + dx[direction];
			int ny = current.second + dy[direction];
			if (nx < 0 || nx >= n || ny < 0 || ny >=m)
			{
				continue;
			}
			if (board[nx][ny] != '1' || dist[nx][ny] >= 0)
			{
				continue;
			}
			dist[nx][ny] = dist[current.first][current.second] + 1;
			Q.push({nx, ny});
		}
	}
	cout << dist[n - 1][m - 1] + 1;
	return 0;
}
