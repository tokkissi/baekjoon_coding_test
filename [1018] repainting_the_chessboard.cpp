#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n,m,mini;
	int bcnt=0;
	int wcnt=0;
	string s;
	vector<int> v;
	
	cin>>n>>m;
	
    // 아래처럼 이중 벡터로 크기를 정할 시, n m 의 크기 제한에
    // 상관없이 코드가 작동한다
    // 이 문제는 m n 각각 최대값이 50으로 최대 50x50 의 문제이므로
    // 이중 벡터가 아닌 최대일때를 이중 배열로 [50][50]하여 크기를 정하고
    // 사용할 수도 있다. 하지만 50 이상에도 문제없도록 벡터가 더 나아보인다
    
	vector<vector<int>> ar(n, vector<int>(m));
	
	for(int i=0; i<n; i++){
		cin>>s;
		for(int j=0; j<m; j++){
			if(s[j]=='B')
				ar[i][j]=0;
			else
				ar[i][j]=1;
		}
	}

	for(int i=0; i+7<n; i++){
		for(int j=0; j+7<m; j++){
			
			for(int k=i; k<i+8; k++){
				for(int l=j; l<j+8; l++){
					
					if((k+l)%2==0){
						if(ar[k][l]!=0){
							bcnt++;
						} else {
							wcnt++;
						}
					}
					if((k+l)%2==1){
						if(ar[k][l]==0){
							bcnt++;
						} else {
							wcnt++;
						}
					}
				}
			}
			v.emplace_back(bcnt);
			v.emplace_back(wcnt);
			bcnt=0;
			wcnt=0;
		}
	}
	
	mini=*min_element(v.begin(), v.end());	
	cout << mini << "\n";	
	return 0;
}
