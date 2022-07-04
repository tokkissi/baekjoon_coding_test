#include <bits/stdc++.h>
using namespace std;


int main(){
	
	ios_base::sync_with_stdio(false);
	
	int n, m, t;
	int cnt=0;
	string s;
	vector<string> v, ans;
	
	cin >> n >> m;
	
	for(int i=0; i<n+m; i++){
		cin >> s;
		v.emplace_back(s);
	}
	
	sort(v.begin(), v.end());
	
	for(int i=0; i<n+m-1; i++){
		if(v[i]==v[i+1]){
			ans.emplace_back(v[i]);
			cnt++;
		}
	}
	
	cout << cnt << "\n";
	
	for(int i=0; i<ans.size(); i++){
		cout << ans[i] <<"\n";
	}
	
	return 0;
}
