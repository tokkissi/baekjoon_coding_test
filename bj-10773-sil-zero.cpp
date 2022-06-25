#include <bits/stdc++.h>
using namespace std;



int main(){
	
	int n, a;
	int sum=0;
	vector<int> v;
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		cin >> a;
		if(a!=0){
			v.push_back(a);
		}
		if(a==0 && v.size()!=0){
			v.pop_back();
		}
	}
	
	cout << accumulate(v.begin(), v.end(), 0) << "\n";
	
	return 0;
}
