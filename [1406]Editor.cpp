#include <bits/stdc++.h>
using namespace std;

int main(){
	
	ios::sync_with_stdio(0);
	cin.tie(0);
	
	string start;
	list<char> li;
	int m;
	
	cin >> start;
	for (auto k : start)
	{
		li.push_back(k);
	}
	auto cursor = li.end();
	cin >> m;
	while (m--)
	{
		char cmd;
		cin >> cmd;
		
		if (cmd == 'L')
		{
			if (cursor != li.begin())
			{
				cursor--;
			}
		} 
		else if (cmd == 'D')
		{
			if (cursor != li.end())
			{
				cursor++;
			}
		}
		else if (cmd == 'B')
		{
			if (cursor != li.begin())
			{
				cursor--;
				cursor = li.erase(cursor);
			}
		}
		else // 'P'
		{
			char add;
			cin >> add;
			li.insert(cursor, add);
		}
	}
	for (auto k : li)
	{
		cout << k;
	}
	
	return 0;
}
