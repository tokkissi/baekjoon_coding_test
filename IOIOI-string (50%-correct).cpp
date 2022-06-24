#include <bits/stdc++.h>
using namespace std;



int main(){
	ios_base::sync_with_stdio(false);
	
	int n, m;	
	int nbe = 0;
	int cnt = 0;
	string s;
	string t="I";
	
	cin >> n;
	cin >> m; 
	cin.ignore();
	getline(cin, s);
	
	
	for(int i=0; i<n; i++){
		t += "OI";
	}
	
	while(s.find(t, nbe) != string::npos){
		cnt++;
		nbe = s.find(t, nbe) + 2;
	}
		
	cout << cnt << "\n";
		
	return 0;
}
