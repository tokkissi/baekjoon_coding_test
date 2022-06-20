#include <string>
#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = 0;
    int tok[32]={0};
    
    for(int i=0; i<reserve.size(); i++){
        tok[reserve[i]]++;
    }
    for(int i=0; i<lost.size(); i++){
        tok[lost[i]]--;
    }
    
    for(int i=1; i<=n; i++){
        int front = i-1;
        int back = i+1;
        
        if(tok[i]>0){
            if(tok[front]<0){
                tok[front]++;
                tok[i]--;
            }
            else if(tok[back]<0){
                tok[back]++;
                tok[i]--;
            }
        }    
    }
    for(int i=1; i<=n; i++){
        if(tok[i]>=0){
            answer++;
        }
    }
    
    return answer;
}
