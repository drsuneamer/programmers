def check(check_num):
    # 12345만 포함하고 있는지 체크하는 함수
    return all(n in '12345' for n in check_num)

# check 함수 이렇게 정의하면 시간은 더 빠름
# def check(n):
#     if '0' not in n and '6' not in n and '7' not in n and '8' not in n and '9' not in n:
#         return True
#     else:
#         return False


def solution(word):
    # 사용 가능한 모음들 (''은 인덱스 처리 위해)
    vowels = ['', 'A', 'E', 'I', 'O', 'U']
    
    # 1부터 55555까지 1, 2, 3, 4, 5만 포함한 숫자 순서대로 저장
    # str로 저장할 경우 1, 11, 111 순서대로 정렬됨
    idxs = [0] + sorted([str(x) for x in range(1, 55556) if check(str(x))])
    
    # 입력된 문자열을 숫자로 변경
    idx_word = ''
    for w in word:
        idx_word += str(vowels.index(w))

    # idxs 배열에서의 인덱스값이 사전에서 몇번째 등장하는지의 값
    return idxs.index(idx_word)
