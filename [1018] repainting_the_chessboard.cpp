#include <bits/stdc++.h>
using namespace std;

int main(){
	
	int n,m,mini;
	int bcnt=0;
	int wcnt=0;
	string s;
	vector<int> v;
	
	cin>>n>>m;
	
    // �Ʒ�ó�� ���� ���ͷ� ũ�⸦ ���� ��, n m �� ũ�� ���ѿ�
    // ������� �ڵ尡 �۵��Ѵ�
    // �� ������ m n ���� �ִ밪�� 50���� �ִ� 50x50 �� �����̹Ƿ�
    // ���� ���Ͱ� �ƴ� �ִ��϶��� ���� �迭�� [50][50]�Ͽ� ũ�⸦ ���ϰ�
    // ����� ���� �ִ�. ������ 50 �̻󿡵� ���������� ���Ͱ� �� ���ƺ��δ�
    
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
