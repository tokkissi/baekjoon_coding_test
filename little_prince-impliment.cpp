#include <bits/stdc++.h>
using namespace std;


int main(){
	
	int tr;
	
	cin >> tr;
	
	for(int i=0; i<tr; i++){
		
		int xs, ys, xe, ye, n;
		int cnt=0;

		cin >> xs;
		cin >> ys;
		cin >> xe;
		cin >> ye;
		cin >> n;
		
		for(int j=0; j<n; j++){
			
			int xt, yt, r;
			
			cin >> xt;
			cin >> yt;
			cin >> r;
			
			if( !((r*r > pow(xt-xs, 2) + pow(yt-ys, 2)) && (r*r > pow(xt-xe, 2) + pow(yt-ye, 2))) ){
			
				if(r*r > pow(xt-xs, 2) + pow(yt-ys, 2))
					cnt++;						
				
				if(r*r > pow(xt-xe, 2) + pow(yt-ye, 2))
					cnt++;
					
			}
		}
		
		cout << cnt << "\n";	
		
	}
		
	return 0;
}
