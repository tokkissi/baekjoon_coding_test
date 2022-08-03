#include <bits/stdc++.h>
using namespace std;

int n, m;
int ar[10];

void bt(int k, int num) {
	if (k == m) {
		for (int i = 0; i < m; i++)
		{
			cout << ar[i] << " ";
		}
		cout << "\n";
		return;
	}
	for (int i = num; i <= n; i++){
		ar[k] = i;
		bt(k + 1, i);
	}
}

int main() {
	
	cin >> n >> m;
	bt(0, 1);
	
	return 0;
}
