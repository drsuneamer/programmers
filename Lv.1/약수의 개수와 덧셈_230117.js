// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
    var answer = 0;
    for (let n = left; n <= right; n++) {
        let q = 0;
        for (let i = 0; i <= n; i++) {
            if (n % i === 0) q++;
        }
        if (q % 2) answer -= n;
        else answer += n;
    }
    return answer;
}