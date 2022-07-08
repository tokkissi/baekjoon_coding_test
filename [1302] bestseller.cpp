#include <bits/stdc++.h>
using namespace std;

bool cmp(pair<string, int> a, pair<string, int> b){
	if(a.second == b.second){
		return a.first < b.first;
	}
	return a.second > b.second;
}


int main(){
	
	int n;
	string s;
	unordered_map<string, int> mcnt;
	
	cin >> n;
	for(int i=0; i<n; i++){
		cin >> s;
		
		if(mcnt.find(s)==mcnt.end()){
			mcnt.emplace(make_pair(s, 1));
		} else {
			mcnt[s]++;
		}
	}
	
	vector<pair<string, int>> v(mcnt.begin(), mcnt.end());
	sort(v.begin(), v.end(), cmp);	
	
	cout << v.front().first << "\n";
	
	return 0;
}
