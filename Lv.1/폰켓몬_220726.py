# [programmers] 폰켓몬  2022-07-26

def solution(nums):
    answer = 0
    N = len(nums)
    NN = len(set(nums))
    if NN > N // 2:
        answer = N // 2
    else:
        answer = NN

    return answer