#include <bits/stdc++.h>
using namespace std;


int main(){
	
	string a;
	int num = 0;
	int div = 0;
	
	cin >> a;
	
	for(int i=0; i<a.length(); i++){
		if(a[i]>47 && a[i]<58){
			num=num*10+(a[i]-'0');
		}
	}
	
	for(int i=1; i<=num; i++){
		if(num%i==0){
			div++;
		}
	}
	
	cout << "num: "<< num << "   div: " << div << "\n";	
	return 0;
}
