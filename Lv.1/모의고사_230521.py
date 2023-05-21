def solution(answers):
    s1 = [1, 2, 3, 4, 5]
    s2 = [2, 1, 2, 3, 2, 4, 2, 5]
    s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    answer = []
    idx1, idx2, idx3 = 0, 0, 0
    cnt = [0, 0, 0]
    
    for a in answers:
        if s1[idx1] == a:
            cnt[0] += 1
        if s2[idx2] == a:
            cnt[1] += 1
        if s3[idx3] == a:
            cnt[2] += 1
        idx1 += 1
        idx2 += 1
        idx3 += 1
        if idx1 == len(s1):
            idx1 = 0
        if idx2 == len(s2):
            idx2 = 0
        if idx3 == len(s3):
            idx3 = 0
        
    m = max(cnt)
    for i in range(3):
        if cnt[i] == m:
            answer.append(i + 1)
            
    return answer
