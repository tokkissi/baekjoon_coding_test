#include <bits/stdc++.h>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    unordered_map<string, int> mappi;

    for(auto k : participant){
        if(mappi.end()==mappi.find(k)){
            mappi.insert(make_pair(k, 1));
        } else {
            mappi[k]++;
        }
    }
    for(auto k : completion){
        mappi[k]--;
    }
    for(auto k : mappi){
        if(k.second>0){
            answer = k.first;
            break;
        }
    }

    return answer;
}
