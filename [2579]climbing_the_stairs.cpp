#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
	int n;
	int point;
	int stair[304];
	int score[304];
	
	cin >> n;
	for (int i = 1; i <= n; i++)
	{
		cin >> point;
		stair[i] = point;
	}
	score[1] = stair[1];
	score[2] = stair[1] + stair[2];
	score[3] = max(stair[1] + stair[3], stair[2] + stair[3]);
	
	for (int i = 4; i <= n; i++)
	{
		score[i] = max(score[i - 2] + stair[i],
		 score[i - 3] + stair[i - 1] + stair[i]);
	}
	cout << score[n] << "\n";
	return 0;
}
