#include <bits/stdc++.h>
using namespace std;

bool check(int i, int j, int k){
	if(i%10==3 || j%10==3 || j/10==3 || k%10==3 || k/10==3){
		return true;
	}
	return false;
}


int main(){
	int cnt=0;
	
	for(int i=0; i<24; i++){
		for(int j=0; j<60; j++){
			for(int k=0; k<60; k++){
				if(check(i, j, k))
					cnt++;
			}
		}
	}
	
	cout << cnt << "\n";
	
	return 0;
}
