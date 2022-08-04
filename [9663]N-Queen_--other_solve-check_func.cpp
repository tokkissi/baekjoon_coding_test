#include <bits/stdc++.h>
using namespace std;

int n;
int cnt = 0;
int board[15];

bool isusable(int row_idx) {
	for (int i = 0; i < row_idx; i++)
	{
		if (board[row_idx] == board[i] || row_idx - i == abs(board[row_idx] - board[i]))
		{
			return false;
		}
	}
	return true;
}

void bt(int row_idx) {
	if (row_idx == n)
	{
		cnt++;
		return;
	}
	for (int i = 0; i < n; i++)
	{
		board[row_idx] = i;
		if (isusable(row_idx))
		{
			bt(row_idx + 1);
		}
	}
}

int main(){
	
	cin >> n;
	bt(0);	
	cout << cnt;
	
	return 0;
}
