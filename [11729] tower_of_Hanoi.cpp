#include <bits/stdc++.h>
using namespace std;

void hanoi(int n, string from, string to, string res){
	if(n==0){
		return;
	} else {
		hanoi(n-1, from, res, to);
		cout << from << " " << to << "\n";
		hanoi(n-1, res, to, from);
	}
}

int main(){
	
	int n;
	
	cin >> n;
	
	int cnt=pow(2, n)-1;
	
	cout << cnt << "\n";
	
	hanoi(n, "1", "3", "2");
		
	return 0;
}
