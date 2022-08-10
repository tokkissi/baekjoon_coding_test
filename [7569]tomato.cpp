#include <bits/stdc++.h>
using namespace std;

int n, m, h;
int board[104][104][104];
int dist[104][104][104];
int dz[6] = {0, 0, 0, 0, -1, 1};
int dx[6] = {-1, 1, 0, 0, 0, 0};
int dy[6] = {0, 0, -1, 1, 0, 0};
int min_dist = 0;

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);
	queue<tuple<int, int, int>> Q;
		
	cin >> m >> n >> h;
	for (int i = 0; i < h; i++)
	{
		for (int j = 0; j < n; j++)
		{
			for (int k = 0; k < m; k++)
			{
				cin >> board[i][j][k];
				if (board[i][j][k] == 1)
				{
					Q.push(make_tuple(i, j, k));
				}
				if (board[i][j][k] == 0)
				{
					dist[i][j][k] = -1;
				}
			}
		}
	}
	while (!Q.empty()) {
		auto current = Q.front();
		Q.pop();
		for (int dir = 0; dir < 6; dir++)
		{
			int nz = get<0>(current) + dz[dir];
			int nx = get<1>(current) + dx[dir];
			int ny = get<2>(current) + dy[dir];
			if (nz < 0 || nz >= h || nx < 0 || nx >= n || ny < 0 || ny >= m)
			{
				continue;
			}
			if (dist[nz][nx][ny] >= 0) {
				continue;
			}
			dist[nz][nx][ny] = dist[get<0>(current)][get<1>(current)][get<2>(current)] + 1;
			Q.push(make_tuple(nz, nx, ny));
		}
	}
	for (int i = 0; i < h; i++)
	{
		for (int j = 0; j < n; j++)
		{
			for (int k = 0; k < m; k++)
			{
				if (dist[i][j][k] == -1)
				{
					cout << -1;
					return 0;
				}
			min_dist = max(min_dist, dist[i][j][k]);
			}
		}
	}
	cout << min_dist;
	
	return 0;
}
