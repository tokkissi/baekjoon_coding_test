#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n; 
	int num;
	int sum = 0;
	int ar[1004];
	
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> num;
		ar[i] = num;
	}
	sort(ar, ar + n);
	
	for (int i = n - 1; i >= 0; i--)
	{
		for (int j = 0; j < n - i; j++)
		{
			sum += ar[j];
		}
	}
	cout << sum << "\n";
	
	return 0;
}
