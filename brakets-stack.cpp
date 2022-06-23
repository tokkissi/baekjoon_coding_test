#include <bits/stdc++.h>
using namespace std;



int main(){
	int n;
	cin >> n;
	
	for(int i=0; i<n; i++){
		string s;
		stack<char> stk;
		
		cin >> s;
		
		for(auto k : s){
			if((stk.size()!=0) && (stk.top()=='(') && k==')'){
				stk.pop();
			} else{
				stk.push(k);
			}			
		}
		if(stk.size()!=0){
			cout << "NO" << "\n";
		} else {
			cout << "YES" << "\n";
		}
		
	}	
	
	return 0;
}
