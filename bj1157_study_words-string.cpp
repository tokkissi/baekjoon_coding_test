#include <bits/stdc++.h>
using namespace std;


int main(){
	
	string s;
	int a[150]={0};
	int max=0;
	int cnt=0;
	char ans='*';
	cin >> s;
	
	for(int i=0; i<s.length(); i++){
		if(s[i]>='a' && s[i]<='z')
			a[(int)s[i]-32]++;
		else {
			a[(int)s[i]]++;	
		}
	}
	
	for(int i=0; i<150; i++){
		if(max<a[i]){
			max=a[i];
		}
	}
	
	for(int i=0; i<150; i++){
		if(max==a[i]){
			cnt++;
			ans=(char)i;	
		}
	}
	
	if(cnt==1){
		cout << ans << "\n";
	} else if(cnt>1){
		cout << "?" << "\n";
	}
	
	return 0;
} 
