#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int m, n, sum, min;
	int ar[10004];
	vector<int> v;
	
	cin >> m >> n;
	for (int i = 2; i <=10000; i++) {
		ar[i] = 1;
	}
	for (int i = 2; i <= 10000; i++) {
		for (int j = i + i; j <= 10000; j+=i) {
			ar[j] = 0;
		}
	}
	
	for (int i = m; i <= n; i++) {
		if(ar[i] == 1) {
			v.emplace_back(i);
		}
	}
	if (v.size() == 0) {
		cout << -1 << "\n";
	} else {
		sum = accumulate(v.begin(), v.end(), 0);
		min = *min_element(v.begin(), v.end());
		cout << sum << "\n";
		cout << min << "\n"; 
	}
	
	return 0;
}
