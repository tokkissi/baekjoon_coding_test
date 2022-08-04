#include <bits/stdc++.h>
using namespace std;

int n;
int cnt = 0;
bool isused1[40];
bool isused2[40];
bool isused3[40];

void bt(int k) {
	if (k == n)
	{
		cnt++;
		return;
	}
	for (int i = 0; i < n; i++)
	{
		if (isused1[i] || isused2[k + i] || isused3[k - i + n - 1])
		{
			continue;
		}
		isused1[i] = 1;
		isused2[k + i] = 1;
		isused3[k - i + n - 1] = 1;
		bt(k + 1);
		isused1[i] = 0;
		isused2[k + i] = 0;
		isused3[k - i + n - 1] = 0;
	}
}

int main(){
		
	cin >> n;
	bt(0);
	cout << cnt;
	
	return 0;
}
