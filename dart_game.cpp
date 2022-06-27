#include <bits/stdc++.h>

using namespace std;

#include <bits/stdc++.h>
using namespace std;

int solution(string s){
	
	vector<int> arr;
	int score=0;
	int pre=0;
	int sum=0;
	
	cin >> s;
	
	for(int i=0; i<s.length(); i++){
		        
		if(i==0)
			score=s[i]-'0';
		
		if(i!=0 && isdigit(s[i])){
			arr.emplace_back(pre);
			pre=score;
			score=s[i]-'0';
		}
		
        if(isdigit(s[i]) && (s[i+1]=='0')){
            score=10;
            i++;
            continue;
        }
        
		if(s[i]=='S'){
			score=pow(score, 1);
		}
		if(s[i]=='D'){
			score=pow(score, 2);
		}
		if(s[i]=='T'){
			score=pow(score, 3);
		}
		
		if(s[i]=='*'){
			pre*=2;
			score*=2;
		}
		if(s[i]=='#'){
			score*=-1;
		}
		
		if(s[i+1]=='\0'){
			arr.emplace_back(pre);
			arr.emplace_back(score);
		}
	}
	
	sum = accumulate(arr.begin(), arr.end(), 0);
	return sum;
}
