#include <bits/stdc++.h>
using namespace std;

int main(){
	
	string s;
	int cnt0=0;
	int cnt1=0;
	
	
	cin >> s;
	
	for(int i=0; i<s.length(); i++){
		
		if(s[i]!=s[i+1]){
			if(s[i]=='0'){
				cnt0++;
			} else {
				cnt1++;
			}
		}
	}
	
	cout << min(cnt0, cnt1) << "\n";	
	
	
	return 0;
}
