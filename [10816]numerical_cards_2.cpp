#include <bits/stdc++.h>
using namespace std;

int main(){
	
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int n, m, num;
	unordered_map<int, int> mapi;
	
	cin >> n; 
	for (int i = n; i > 0; i--)
	{
		cin >> num;
		mapi[num]++;
	}
	cin >> m;
	for (int i = m; i > 0; i--)
	{
		cin >> num;
		cout << mapi[num] << " ";
	}
	
	return 0;
}
