#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	int n, num;
	string cmd;
	int s[21]={0,};
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		cin >> cmd;
		if(cmd=="add"){
			cin >> num;
			s[num]=1;
		} else if(cmd=="remove"){
			cin >> num;
			s[num]=0;
		} else if(cmd=="check"){
			cin >> num;
			if(s[num]){
				cout << 1 << "\n";
			} else {
				cout << 0 << "\n";
			}
		} else if(cmd=="toggle"){
			cin >> num;
			s[num]=s[num]^1;
		} else if(cmd=="all"){
			fill(s, s+21, 1);
		} else {
			memset(s, 0, sizeof(s));
		}
	}
	
	return 0;
}
