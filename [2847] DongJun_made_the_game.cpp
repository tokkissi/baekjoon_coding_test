#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n,p;
	int arp[104]={0,};
	int cnt=0;
	int dif=0;
	
	cin >> n;
	
	for(int i=0; i<n; i++){
		cin >> p;
		arp[i]=p;
	}
	
	for(int i=n-2; i>=0; i--){
		if(arp[i]>=arp[i+1]){
			dif=arp[i]-arp[i+1]+1;
			cnt+=dif;
			arp[i]-=dif;
			dif=0;
		}
	}
	
	cout << cnt << "\n";
	
	
	return 0;
}
