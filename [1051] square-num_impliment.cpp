#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int n, m, num, r, tok;
	int ans=-1;
	string s;
	cin >> n >> m;
	vector<int> v;
	
	int ar[n][m];
	
	for(int i=0; i<n; i++){		
		cin >> s;
		for(int j=0; j<m; j++){
			ar[i][j]=(int)s[j]-'0';
		}
	}
	
	
	for(int i=0; i<n; i++){
		for(int j=0; j<m; j++){
			for(int k=m-1; k>j; k--){
				if(ar[i][j]==ar[i][k]){
					num=ar[i][j];
					r=k-j;
					if(i+r<n){
						if((ar[i+r][j]==num) && (ar[i+r][k]==num)){
						ans=(r+1)*(r+1);
						v.emplace_back(ans);
						}
					}
				}
			}
		}
	}
	tok=*max_element(v.begin(), v.end());
	if(v.size()==0){
		tok=1;
	}
	if(tok==0){
		tok=1;
	} 	
	cout << tok << "\n";
		
	return 0;
}
