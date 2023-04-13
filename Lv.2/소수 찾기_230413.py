from itertools import permutations

def check(n):
    for i in range(2, int(n ** 1/2) + 1):
        if n % i == 0:
            return False
    return True
    
def solution(numbers):
    answer = set()
    lst = list(numbers)

    for i in range(1, len(lst) + 1):
        l = list(permutations(lst, i))
        for ll in l:
            z = "".join(ll)[0]
            if z != '0':
                n = int("".join(ll))
                if n > 1:
                    if check(n):
                        answer.add(n)
    
    return len(answer)
  
'''
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
'''
