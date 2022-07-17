#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n;
	vector<long long> v;
	
	cin >> n;
	v.emplace_back(0);
	v.emplace_back(1);
	if (n >= 2)
	{
		for (int i = 2; i <= n; i++)
		{
			v.emplace_back(v[i-1]+v[i-2]);
		}	
	}
	cout << v[n] <<"\n";
	
	return 0;
}
