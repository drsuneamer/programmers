/*
 i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
i! <= n
*/

function factorial(n) {
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r
}

function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (factorial(i) === n) {
            answer = i;
            break;
        } else if (factorial(i) > n) {
            answer = i - 1;
            break;
        }
    }
    return answer;
}