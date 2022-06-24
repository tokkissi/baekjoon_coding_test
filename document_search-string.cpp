#include <bits/stdc++.h>
using namespace std;


int main(){
	
	string s;
	string t;
	int cnt=0;
	int nbe=0;
	
	
	getline(cin, s);
	getline(cin, t);
	
	while(s.find(t, nbe)!=string::npos){
		
		nbe=s.find(t, nbe) + t.length();
		cnt++;
				
	}
	
	cout << cnt << "\n";
	
	return 0;
}
