#include <bits/stdc++.h>
using namespace std;
int a[11], N, K;
bool visited[11];
set<string> comb;

auto P(int x, int cnt, string s) {
    if (cnt == K) return comb.insert(s); // k�� �����ϸ� ��
    for (int i = 0; i < N; i++) { // ���� ������ ��� ���ҿ� ����
        if (!visited[i]) { // ������ ���õ� ���Ҵ� �ٽ� ���� ���ϵ���
            visited[i] = true; // ���� ������ ���� �湮 üũ
            P(i, cnt + 1, s + to_string(a[i])); // cnt �����ϰ� ������ ���ڿ��� �߰�
            visited[i] = false; // backtrack�� ��ġ���� �����ߴ� ���� �湮 ���
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
