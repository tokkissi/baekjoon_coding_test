#include <bits/stdc++.h>
using namespace std;


int main(){
	bool t[10004];	
	
	for(int i=1; i<=10000; i++){
		t[i]=true;
	}
	
	for(int i=1; i<=10000; i++){
		int k=i;
		int sum=0;
//		k = (i/1000) + ((i%100)/10) + ((i%10)/10) + i%10 + i;
////	k = (i/1000) + ((i/100)%10) + ((i/10)%10) + i%10 + i;
//		if(k<=10000)
//			t[k] = false;
		while(k!=0){
			sum += (k%10);
			k/=10;
		}
		if(i+sum<=10000)
			t[i+sum]=0;
	}
	
	for(int i=1; i<=10000; i++){
		if(t[i])
			cout << i << "\n";
	}
	
	return 0;
}
