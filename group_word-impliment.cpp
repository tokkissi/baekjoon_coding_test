#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int n;
	int bcnt=0;
	cin >> n;
	
	
	for(int i=0; i<n; i++){
		int fai=0;
		string s;
		int ch[28]={0};
		cin >> s;
		
		for(int j=0; j<s.length(); j++){
			ch[s[j]-'a']++;
			if(ch[s[j]-'a']>1 && j>1 && (s[j]!=s[j-1])){
				fai++;
				break;
			}		
		}
		if(fai==0)
			bcnt++;
	}
	
	cout << bcnt << "\n";
	
	return 0;
}
