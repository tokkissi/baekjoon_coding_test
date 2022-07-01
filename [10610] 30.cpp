 #include <bits/stdc++.h>
 using namespace std;
 
 int main(){
 	
 	string s;
 	long long sum=0;
 	int zcnt=0;
 	
 	cin >> s;
 	
 	for(int i=0; i<s.size(); i++){
	 sum+=s[i]-'0';
	 if(s[i]=='0')
		 zcnt++;
	 }
 	
 	if((zcnt!=0) && (sum%3==0)){
 		sort(s.begin(), s.end(), greater<int>());
	 	cout << s << "\n";
		 		
	 } else {
	 	cout << -1 << "\n";
	 }
 	return 0;
 }
