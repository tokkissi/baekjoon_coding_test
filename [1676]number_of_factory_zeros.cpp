#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int n;
	int cnt=0;
	
	cin >> n;
	if (n == 0)
	{
		cout << 0;
		return 0;
	}
	while (n > 0)
	{
		cnt += n/5;
		n/=5;
	}
	cout << cnt << "\n";
	
	return 0;
}
