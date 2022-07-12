#include <bits/stdc++.h>
using namespace std;

bool check_prime(int a) {
	for (int i=2; i<=sqrt(a); i++) {
		if (a%i==0) {
			return false;
		}
	}
	return true;
}

int main(){
	
	int n, m;
	int cnt=0;
	
	cin >> n;
	for (int i=0; i<n; i++) {
		cin >> m;
		if (m==1) {
			continue;
		} else if (check_prime(m)) {
			cnt++;
		}
	}
	cout << cnt << "\n";
	
	return 0;
}
