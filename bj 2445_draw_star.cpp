#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n, a;
	cin >> n;
	for(int j=1; j<=n; j++){
		for(int i=1; i<=j; i++){
			cout << "*";
		}
		for(int i=n-j; i>=1; i--){
			cout << "  ";
		}
		for(int i=1; i<=j; i++){
			cout << "*";
		}
		cout << "\n";
	}

	for(int j=n; j>=1; j--){
		for(int i=j-1; i>=1; i--){
			cout << "*";		
		}
		for(int i=n-j+1; i>=1; i--){
			cout << "  ";
		}
		for(int i=j-1; i>=1; i--){
			cout << "*";
		}
		cout << "\n";
	}

    return 0;
}
