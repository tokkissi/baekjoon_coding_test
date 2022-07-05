#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
	int n, num;
	string cmd;
	int s[20]={0,};
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		cin >> cmd;
		if(cmd=="all"){
			memset(s, 2, sizeof(s));
			continue;
		}
		else if(cmd=="empty"){
			memset(s, 1, sizeof(s));
			continue;
		}
		cin >> num;
		
		if(cmd=="add"){
			s[num]=2;
		} else if(cmd=="remove"){
			s[num]=1;
		} else if(cmd=="check"){
			if(s[num]==0 || s[num]==1){
					cout << 0 << "\n";
				} else {
					cout << 1 << "\n";
				}
		} else if(cmd=="toggle"){
			if(s[num]==0 || s[num]==1){
					s[num]=2;
				} else {
					s[num]=1;
				}
		} 
	}
	
	return 0;
}
