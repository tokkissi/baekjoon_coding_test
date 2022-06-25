#include <bits/stdc++.h>
using namespace std;

int main(){
	
	string n;
	int b=0;
	int temp=0;
	int ret=0;
	
	cin >> n;
	cin.ignore();
	cin >> b;
		
	for(int i=0; i<n.length(); i++){
		
		temp=n[i];
		if(temp>=48 && temp<=57){
			temp=temp-48;
		} else if(temp>=65 && temp<=90){
			temp=temp-55;
		}
		
		ret += temp*pow(b, n.length()-i-1);
//		cout << "ret : " << ret << "\n";
	}
	cout << ret << "\n";
		
	return 0;
}
