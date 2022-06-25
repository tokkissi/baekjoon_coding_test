#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int n;
	int b;
	vector<int> v;
	string ret="";
	
	cin >> n >> b;
	
	while(n!=0){
		
		v.emplace_back(n%b);
		n=n/b;
		
	}
	v.emplace_back(n%b);
	reverse(v.begin(), v.end());
	
	for(auto k : v){
		if(k>=0 && k<=9){
			if(ret=="" && k==0){
				continue;
			} 
			ret+=k+'0';
		} else if(k>=10 && k<=35){
			ret+=k-10+'A';
		}
	}
	
	cout << ret <<"\n";
	
	return 0;
}
