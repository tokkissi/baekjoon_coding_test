#include <bits/stdc++.h>
using namespace std;

int main(){
	
	string s;
	string temp="";
	string arr[8]={"c=", "c-", "dz=", "d-", "lj", "nj", "s=","z="};
	cin >> s;
	bool tok=false;
	int cnt=0;
	
	for(int i=0; i<s.size(); i++){
		
		for(int j=2; j<=3; j++){
			temp=s.substr(i,j);
			for(int k=0; k<8; k++){
				if(arr[k]==temp){
					cnt++;
					i+=temp.size()-1;
					tok=true;
					break;
				}
			}
			if(tok)
				break;
		}
		if(!tok){
			cnt++;
		} else {
			tok=false;
		}
	}
	cout << cnt << "\n";
	
	return 0;
}
