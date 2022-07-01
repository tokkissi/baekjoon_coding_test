#include <bits/stdc++.h>
using namespace std;

struct tok
{
	bool operator() (const string& left, const string& right) const
	{
		if(left.size() == right.size()) {
			return left < right;
		} else {
			return left.size() < right.size();
		}
	}
};


int main(){
	
	int n;
	string s;
	cin >> n;
	
	set<string, tok> st;	
	
	for(int i=0; i<n; i++){
		cin >> s;
		st.insert(s);
	}
	
	for(auto k : st){
		cout << k << "\n";
	}
	
	return 0;
}
