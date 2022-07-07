#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int cnt=0;
	char pre=0;
	int ans=0;
	string s;
	getline(cin, s);
	
	for(int i=0; i<s.size(); i++){
		if(s[i]=='('){
			cnt++;
		} else {
			cnt--;
			if(pre=='('){
				ans+=cnt;
			} else {
				ans++;
			}
		}
		pre=s[i];
	}
	cout << ans << "\n";
	
	return 0;
}
