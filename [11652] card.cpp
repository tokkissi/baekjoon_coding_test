#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

bool cmp(pair<ll, int> a, pair<ll, int> b) {	
	if (a.second == b.second) {
		return a.first < b.first;
	}
	return a.second > b.second;
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	
	int n;
	ll m;
	unordered_map<ll, int> mapi;
	
	cin >> n;	
	for (int i = 0; i < n; i++) {
		cin >> m;
		mapi[m]++;
	}
	vector<pair<ll, int>> v(mapi.begin(), mapi.end());
	sort(v.begin(), v.end(), cmp);
	cout << v.front().first << "\n";
	
	return 0;
}
