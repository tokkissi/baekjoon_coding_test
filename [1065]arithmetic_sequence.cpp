#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n;
	int a, b, c;
	int cnt = 0;
	
	cin >> n;
	if (n < 100)
	{
		cnt = n;
	}
	if (n == 1000)
	{
		n = 999;
	}
	if (n >= 100 && n <1000)
	{
		for (int i = 100; i <= n; i++)
		{
			a = i / 100;
			b = (i % 100) / 10;
			c = i % 10;			
			if (a - b == b - c)
			{
				cnt++;
			}
		}
		cnt += 99;
	}
	cout << cnt << "\n";
	
	return 0;
}
