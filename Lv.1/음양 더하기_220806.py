# [programmers] Lv.1 음양 더하기  2022-08-06

def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        if signs[i] == 1:
            answer += int(absolutes[i])
        else:
            answer += -int(absolutes[i])
    return answer