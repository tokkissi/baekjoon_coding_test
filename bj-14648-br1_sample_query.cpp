#include <bits/stdc++.h>
using namespace std;



int main(){
	
	int n, q;
	int arr[1004]={0};
	
	cin >> n >> q;
	
	for(int i=1; i<=n; i++){	
		cin >> arr[i];
	}
	
	for(int i=0; i<q; i++){
		int box;
		long long s1=0;
		long long s2=0;
		
		cin >> box;
		
		if(box==1){
			int a, b;
			cin >> a >> b;
			for(int j=a; j<=b; j++){
				s1+=arr[j];
			}
			cout << s1 << "\n";
			swap(arr[a], arr[b]);	
		}
		
		if(box==2){
			int a, b, c, d;
			cin >> a >> b >> c >> d;
			for(int j=a; j<=b; j++){
				s1+=arr[j];
			}
			for(int j=c; j<=d; j++){
				s2+=arr[j];
			}
			cout << s1-s2 << "\n";
		}
	} 
	
	return 0;
}
