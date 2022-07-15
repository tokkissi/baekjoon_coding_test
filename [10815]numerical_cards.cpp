#include <bits/stdc++.h>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int n, m;
	string s;
	unordered_map<string, int> mapi;
	
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> s;
		mapi[s]++;	
	}
	cin >> m;
	cin >> s;
	if(mapi[s] == 0)
	{
		cout << 0;
	}
	else
	{
		cout << 1;
	}
	for (int i = 1; i < m; i++)
	{
		cin >> s;
		if(mapi[s] == 0)
		{
			cout << " " << 0;
		}
		else
		{
			cout << " " << 1;
		}
	}
	return 0;
}
