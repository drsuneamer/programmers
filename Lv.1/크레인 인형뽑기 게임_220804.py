def solution(board, moves):
    answer = 0  # 터트려져 사라진 인형의 개수
    L = [0]
    l = len(board[0])  # 크기 (한 변의 길이)
    for m in moves:
        for j in range(l):
            a = board[j][m - 1]
            if a != 0:
                if a == L[-1]:
                    answer += 2
                    L.pop(-1)
                    board[j][m - 1] = 0
                    break
                else:
                    L.append(a)
                    board[j][m - 1] = 0
                    break

    return answer