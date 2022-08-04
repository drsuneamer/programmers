# [programmers] lv.1 로또의 최고 순위와 최저 순위

def solution(lottos, win_nums):
    zero = 0
    yes = 0

    for l in lottos:
        if l == 0:
            zero += 1
        elif l in win_nums:
            yes += 1

    a = 7 - (yes + zero)
    b = 7 - yes
    if a >= 7:
        a = 6
    if b >= 7:
        b = 6
    answer = [a, b]
    return answer