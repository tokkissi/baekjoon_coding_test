#include <bits/stdc++.h>
using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int n, m;
	int cnt=0;
	string s;
	
	cin >> n >> m >> s;
	
	for(int i=0; i<m; i++){
		int kt=0;
		if(s[i]=='I'){
			while((s[i+1]=='O') && (s[i+2]=='I')){
				kt++;
				if(kt>=n)
					cnt++;
				i+=2;					
			}			
		}
	}
		
	cout << cnt << "\n";
		
	return 0;
}
