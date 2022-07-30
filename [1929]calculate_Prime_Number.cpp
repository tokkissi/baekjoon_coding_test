#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
	cout.tie(NULL);
	
	int m, n;
	bool ar[1000004];
	
	cin >> m >> n;
	for (int i = 2 ; i <= n; i++)
	{
		ar[i] = true;
	}
	for (int i = 2 ; i <= n; i++)
	{
		for (int j = i + i; j <=n; j += i)
		{
			ar[j] = false;
		}
	}
	for (int i = m; i <= n; i++)
	{
		if (ar[i] == true)
		{
			cout << i << "\n";
		}
	}
	
	return 0;
}
