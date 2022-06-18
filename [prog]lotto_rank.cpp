#include <bits/stdc++.h>

using namespace std;


vector<int> solution(vector<int> lottos, vector<int> win_nums) {
    vector<int> answer;
    int nn=0;
    int mu=0;
    int lrank;
    int hrank;
    for(int i=0; i<6; i++){
        if(lottos[i]==0)
            nn++;
        else {
        	for(int j=0; j<6; j++)        		
            	if(lottos[i]==win_nums[j])
                	mu++;
        }
    }
    cout << "mu: "<<mu <<"\n";
    cout << "nn: " << nn << "\n";
    lrank = 7-mu;
    if(lrank == 7)
        lrank = 6;
    hrank = 7-nn-mu;
    if(hrank == 7)
    	hrank = 6;
    cout << "hrank: " << hrank << "\n";
    cout << "lrank: " << lrank << "\n";
	answer.push_back(hrank);
    answer.push_back(lrank);
    return answer;
}

int main(){
	vector<int> ans;
	vector<int> lottos = {1,2,3,4,5,6};
	vector<int> win_nums = {11,22,33,44,23,35};
	ans=solution(lottos, win_nums);
	for(int i=0; i<2; i++)
		cout << ans[i];
	cout << "\n";
	return 0;
}
