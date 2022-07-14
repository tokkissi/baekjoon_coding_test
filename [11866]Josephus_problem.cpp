#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int n, k;
	queue<int> q;
	 
	cin >> n >> k;
	for (int i = 1; i <= n; i++)
	{
		q.push(i);
	}
	
	cout << "<";
	while (q.size() > 0) {
		if(q.size() != 1) 
		{
			for(int i = 0; i < k - 1; i++)
			{
				q.push(q.front());
				q.pop();
			}
			cout << q.front() << ", ";
		 }
		 else
		 {
		 	for(int i = 0; i < k - 1; i++)
			{
				q.push(q.front());
				q.pop();
			}
			cout << q.front();
		 } 
		q.pop();
	}
	cout << ">" << "\n";
	
	return 0;
}
