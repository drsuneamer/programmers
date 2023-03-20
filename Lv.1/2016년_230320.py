"""
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
"""

def solution(a, b):
    names = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    days = b
    
    for i in range(1, a):
        if (i == 2):
            days += 29
        elif (i in [1, 3, 5, 7, 8, 10 , 12]):
            days += 31
        else:
            days += 30

    answer = names[days % 7 - 1]
    
    return answer
