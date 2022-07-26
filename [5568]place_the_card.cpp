#include <bits/stdc++.h>
using namespace std;
int a[11], N, K;
bool visited[11];
set<string> comb;

auto P(int x, int cnt, string s) {
    if (cnt == K) return comb.insert(s); // k개 선택하면 끝
    for (int i = 0; i < N; i++) { // 선택 가능한 모든 원소에 대해
        if (!visited[i]) { // 이전에 선택된 원소는 다시 선택 안하도록
            visited[i] = true; // 현재 선택한 원소 방문 체크
            P(i, cnt + 1, s + to_string(a[i])); // cnt 증가하고 생성한 문자열에 추가
            visited[i] = false; // backtrack된 위치에서 선택했던 원소 방문 취소
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin >> N >> K;
    for (int i = 0; i < N; i++) cin >> a[i];
    P(0, 0, "");
    cout << comb.size();
}
