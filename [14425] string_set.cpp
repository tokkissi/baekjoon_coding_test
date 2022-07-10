#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int n, m;
	int cnt=0;
	string s;
	unordered_map<string, int> mapi;
	
	cin >> n >> m;
	
	for(int i=0; i<n; i++){
		cin >> s;
		mapi[s]=1;
	}
	
	for(int i=0; i<m; i++){
		cin >> s;
		if(mapi[s]==1){
			cnt++;
		}
	}
	
	cout << cnt << "\n";
	
	return 0;
}
