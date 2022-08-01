#include <bits/stdc++.h>
using namespace std;

int n, m;
int ar[10];
bool isused[10];

bool check(int s, int t){
	if (s == 0)
	{
		return true;
	}
	for (int i = 0; i < s; i++)
	{
		if (ar[i] - t > 0)
		{
			return false;
		}
	}
	return true;
}

void bt(int k){
	if (k == m)
	{
		for (int i = 0; i < m; i++)
		{
			cout << ar[i] << " ";
		}
		cout << "\n";
		return;
	}
	for (int i = 1; i <= n; i++)
	{
		if (!isused[i] && check(k, i))
		{
			ar[k] = i;
			isused[i] = true;
			bt(k + 1);
			isused[i] = false;
		}
	}
}

int main(){
	ios_base::sync_with_stdio(false);
	cout.tie(NULL);
	
	cin >> n >> m;
	bt(0);
	
	return 0;
}
