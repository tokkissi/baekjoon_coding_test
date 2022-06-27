#include <bits/stdc++.h>

using namespace std;

// unordered_map<string, string> mapi;

int solution(string s){
    unordered_map<string, string> mapi;

    string part="";
    string ret="";
    int st=0;
    
    mapi["zero"]="0";
    mapi["one"]="1";
    mapi["two"]="2";
    mapi["three"]="3";
    mapi["four"]="4";
    mapi["five"]="5";
    mapi["six"]="6";
    mapi["seven"]="7";
    mapi["eight"]="8";
    mapi["nine"]="9";
    
    for(int i=0; i<s.length(); i++){
        
        if(isdigit(s[i])){
            ret+=s[i];
            st=st+1;
        } else {
            part=s.substr(st, i-st+1);
            if(mapi[part]!=""){
                ret+=mapi[part];
                st+=part.length();
                part="";
            }
        }
        
    }
    return stoi(ret);
}

// -----------------------------

// void cov(){
//     mapi["zero"]="0";
//     mapi["one"]="1";
//     mapi["two"]="2";
//     mapi["three"]="3";
//     mapi["four"]="4";
//     mapi["five"]="5";
//     mapi["six"]="6";
//     mapi["seven"]="7";
//     mapi["eight"]="8";
//     mapi["nine"]="9";
// }

//----------------------

// int solution(string s) {
//     int answer = 0;
//     string ret="";
//     string tok="";
//     // cov();
    
//     mapi["zero"]="0";
//     mapi["one"]="1";
//     mapi["two"]="2";
//     mapi["three"]="3";
//     mapi["four"]="4";
//     mapi["five"]="5";
//     mapi["six"]="6";
//     mapi["seven"]="7";
//     mapi["eight"]="8";
//     mapi["nine"]="9";
    
//     for(int i=0; i<s.length(); i++){
//         if(isdigit(s[i])){
//            tok+=s[i]; 
//         } else {    // 숫자가 아니면 아래 실행
//             ret+=s[i]; 
//             if(mapi[ret] != ""){  // ret 이 mapi에 있다면 (없으면 빈문자열임) 
//                 tok+=mapi[ret];
//                 ret="";
//             }                         
//         }
//     }
//     answer=stoi(tok);
//     
//     return answer;
// }
