#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int n;
	int cnt=0;
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		string s;
		int arr[26]={0};
		
		cin >> s;
		
		for(int j=0; j<s.length(); j++){
			if(j!=0 && (s[j-1]==s[j])){
				continue;
			} else {
				arr[s[j]-'a']++;
			}
		}
		
		for(int j=0; j<26; j++){
			if(arr[j]>1){
				cnt++;
				break;
			}
		}
	}
	
	cout << n-cnt << "\n";
	
	return 0;
}
