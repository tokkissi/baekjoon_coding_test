#include <bits/stdc++.h>
using namespace std;

int n, m;
int ar[10];
bool isused[10];

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
		if (!isused[i])
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
