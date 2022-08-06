# [programmers] Lv.1 없는 숫자 더하기 2022-08-06

def solution(numbers):
    answer = 45
    for n in numbers:
        answer -= n
    return answer