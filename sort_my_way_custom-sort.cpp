#include <bits/stdc++.h>

using namespace std;

int k;

bool cmp(string a, string b){
    if(a[k]==b[k]){
        return a < b;
    } else {
        return a[k] < b[k];
    }
}

vector<string> solution(vector<string> strings, int n) {
    k=n;
    sort(strings.begin(), strings.end(), cmp);
    
    return strings;
}
