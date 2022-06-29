#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n;
	int tok=-1;
	cin >> n;
	
	int a=n/5;
	
	for(int i=a; i>=0; i--){
		if((n-5*i)%3==0){
			tok=i+(n-5*i)/3;
			break;
		}
	} 	
	
	cout << tok << "\n";
	
	return 0;
}
