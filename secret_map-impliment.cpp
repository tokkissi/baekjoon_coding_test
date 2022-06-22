#include <bits/stdc++.h>

using namespace std;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    
    for(int i=0; i<n; i++){
        int a, b;
        a=arr1[i];
        b=arr2[i];
        string r="";
        for(int j=0; j<n; j++){
            if(a%2==0 && b%2==0)
                r=" "+r;
            else
                r="#"+r;
            a/=2;
            b/=2;
        }
        answer.push_back(r);
    }
    return answer;
}
