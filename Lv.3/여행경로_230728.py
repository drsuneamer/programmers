def solution(tickets):

    def travel(i, v, l):
        if len(l) == len(tickets) and 0 not in v:
            l.append(tickets[i][1])
            answer.append(list(l))
            return

        for j in range(len(tickets)):
            if v[j] == 0 and tickets[j][0] == tickets[i][1]:
                l.append(tickets[j][0])
                v[j] = 1
                travel(j, v, l)
                v[j] = 0
                l.pop(-1)


    answer = []
    tickets = sorted(tickets)
    for idx, t in enumerate(tickets):
        if t[0] == "ICN":
            visited = [0] * len(tickets)
            lst = ["ICN"]
            visited[idx] = 1
            travel(idx, visited, lst)

    return min(answer)
