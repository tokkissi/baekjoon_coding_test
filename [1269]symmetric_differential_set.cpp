#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n, m, num;
	int cnt = 0;
	set<int> seti;
	
	cin >> n >> m;
	for (int i = 0; i < n; i++)
	{
		cin >> num;
		seti.insert(num);
	}
	for (int i = 0; i < m; i++)
	{
		cin >> num;
		if (seti.find(num) != seti.end())
		{
			cnt++;
		}
	}
	cout << n + m - 2*cnt << "\n";
	
	return 0;
}
