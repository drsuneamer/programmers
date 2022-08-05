# [programmers] Lv.1 완주하지 못한 선수  2022-08-05

def solution(participant, completion):
    answer = ''
    P = {}
    for p in participant:
        if p in P:
            P[p] += 1
        else:
            P[p] = 1

    for c in completion:
        P[c] -= 1

    for p in P:
        if P[p] >= 1:
            answer = p

    return answer