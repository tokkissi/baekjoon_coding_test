#include <bits/stdc++.h>
using namespace std;

int main(){
	
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	
	int n, num;
	string s;
	
	deque<int> dq;
	
	for(int i=0; i<n; i++){
		cin >> s;
		
		if(s=="push"){
			cin >> num;
			dq.push_back(num);	
		} else if(s=="pop") {
			if(dq.size()){
				cout << dq.front() << "\n";
				dq.pop_front();
			} else {
				cout << -1 << "\n";
			}
		} else if(s=="size"){
			cout << dq.size() << "\n";
		} else if(s=="empty"){
			if(dq.size()){
				cout << 0 << "\n";
			} else {
				cout << 1 << "\n";
			}
		} else if(s=="front"){
			if(dq.size()){
				cout << dq.front() << "\n";
			} else {
				cout << -1 << "\n";
			}
		} else {
			if(dq.size()){
				cout << dq.back() << "\n";
			} else {
				cout << -1 << "\n";
			}
		}
	}
	
	
	return 0;
}
