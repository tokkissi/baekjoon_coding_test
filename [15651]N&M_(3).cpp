#include <bits/stdc++.h>
using namespace std;

int n, m;
int ar[10];

void bt(int k) {
	if (k == m)
	{
		for (int i = 0; i < m; i++)
		{
			cout << ar[i] << " ";
		}
		cout << "\n";
	}
	else
	{
		for (int i = 1; i <= n; i++)
		{
			ar[k] = i;
			bt(k+1);
		}
	}
}

int main(){
	
	cin >> n >> m;
	bt(0);	
	
	return 0;
}
