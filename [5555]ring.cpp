#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int num;
	int cnt = 0;
	string ori;
	string s;
	
	cin >> ori;
	cin >> num;
	for (int i = 0; i < num; i++)
	{
		cin >> s;
		s += s;
		if (s.find(ori) != string::npos)
		{
			cnt++;
		}
	}
	cout << cnt;
	
	return 0;
}
