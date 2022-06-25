#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int n;
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		
		string s;
		int sum=0;
		int coin=1;
		int bonus=0;
		bool combo=false;
		
		cin >> s;
		
		for(int j=0; j<s.length(); j++){
			if(s[j]=='O'){
				if(combo){
					sum+=bonus;
					sum+=coin;
					bonus++;
				} else{
					sum+=coin;
					bonus++;
					combo=true;
				}
			}else{
				bonus=0;
				combo=false;
			}				
		}
	cout << sum << "\n";
	} 
	return 0;
}
