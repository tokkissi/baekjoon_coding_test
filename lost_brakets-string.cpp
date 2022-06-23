#include <bits/stdc++.h>
using namespace std;

int main(){
	string s;
	cin >> s;	
	
	string temp="";
	int ret=0;
	int chk=0;
	int answer=0;
	
	for(int i=0; i<=s.size(); i++){		
		if(s[i]=='-' || s[i]=='+' || s[i]=='\0'){	/
			if(chk==1)		
				ret -= stoi(temp);	
			else 
				ret += stoi(temp);		
			
			if(s[i]=='-')
				chk=1;		
				
			temp="";
		} else {			 
			temp+=s[i];		  
		}		
	}
	cout << ret << "\n";
		
	return 0;
}
