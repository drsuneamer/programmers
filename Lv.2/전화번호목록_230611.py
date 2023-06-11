def solution(phone_book):
    answer = True
    
    # 시작하는 숫자와 길이 두 가지 기준으로 정렬
    phone_book = sorted(phone_book, key= lambda x: (len, x))

    
    for i in range(len(phone_book) - 1):
        if answer == False:
            break
        else: 
            txt = phone_book[i]
            l = len(txt)
            # 정렬이 완료된 상태이기 때문에 바로 뒤의 값만 확인해도 됨
            if phone_book[i + 1][:l] == txt:
                answer = False

    return answer
  
  
'''
전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

구조대 : 119
박준영 : 97 674 223
지영석 : 11 9552 4421
전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.
'''
