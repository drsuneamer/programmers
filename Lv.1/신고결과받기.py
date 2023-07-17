def solution(id_list, report, k):
    answer = [0] * len(id_list)
    report = set(report)
    for r in report:
        a, b = r.split(' ')
        for i in range(len(id_list)):
            if id_list[i] == b:
                answer[i] += 1
    return answer
