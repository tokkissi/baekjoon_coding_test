#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int diflen;
	int cnt = 0;
	int ans;
	vector<int> v;
	string a, b, temp;
	string s = "0";
	cin >> a >> b;
	diflen = b.length() - a.length();
	if (diflen == 0)
	{
		for (int i = 0; i < b.length(); i++)
		{
			if (a[i] != b[i])
			{
				cnt++;
			}
		}
		v.emplace_back(cnt);
		cnt = 0;
	}
	for (int i = 0; i <= diflen; i++)
	{
		temp = a;
		for(int t = 0; t < i; t++)
		{
			temp = s + temp;
		}
		for (int t = 0; t < diflen - i; t++)
		{
			temp = temp + s;
		}
		for (int j = 0; j < b.length(); j++)
		{
			if (temp[j] != b[j])
			{
				cnt++;
			}
		}
		v.emplace_back(cnt);
		cnt = 0;
	}
	ans = *min_element(v.begin(), v.end()) - diflen;
	cout << ans << "\n";
	
	return 0;
}
