#include <bits/stdc++.h>
using namespace std;

int main(){
	
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
	int n;
	int m;
	int num;
	int i;
	int j;
	int ans;
	int sum = 0;
	int ar[100004];
//	vector<int> v;
	
	cin >> n >> m;
	for (int t = 1;  t <= n; t++)
	{
		cin >> num;
		sum += num;
		ar[t] = sum;
	}
	for (int t = 1; t <= m; t++)
	{
		cin >> i >> j;
		ans = ar[j] - ar[i - 1];
		cout << ans << "\n";
	}
	
	
//	**use case - vector accumulate : time over**
//	cin >> n >> m;
//	for (int t = 0; t < n; t++)
//	{
//		cin >> num;
//		v.emplace_back(num);
//	}
//	for (int t = 0; t < m; t++)
//	{
//		cin >> i >> j;
//		sum = accumulate(v.begin()+i-1,v.begin()+j, 0);
//		cout << sum << "\n";
//	}
	
	return 0;
}
