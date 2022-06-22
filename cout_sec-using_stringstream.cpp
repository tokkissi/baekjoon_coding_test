#include <bits/stdc++.h>
using namespace std;

int main(){

	vector<long long> time;
	string clock="2022:06:22 15:15:30";
	for(int i=0; i<clock.length(); i++){
		if(clock[i]==':'){
			clock[i]=' ';
		}
	}
	
	long long num = 0;
	stringstream ss;
	ss.str(clock);
	while(ss>>num){
		time.push_back(num);
	}
	
	long long sec = 0;
	sec += time[0]*365*24*60*60;
	sec += time[1]*30*24*60*60;
	sec += time[2]*24*60*60;
	sec += time[3]*60*60;
	sec += time[4]*60;
	sec += time[5];
	
	cout<<sec<<"\n";

	return 0;
};
