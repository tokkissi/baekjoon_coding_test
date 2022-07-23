#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n;
	pair<int, int> pr[54];
	int rank = 1;
	
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> pr[i].first >> pr[i].second;
	}
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			if ((pr[i].first < pr[j].first) && (pr[i].second < pr[j].second))
			{
				rank++;
			}
		}
		cout << rank << " ";
		rank = 1;
	}
	
	return 0;
}
