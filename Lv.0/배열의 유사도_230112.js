// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
	var answer = 0;

	if (s1.length < s2.length) {
		for (let s of s1) if (s2.includes(s)) answer++;
	} else for (let s of s2) if (s1.includes(s)) answer++;
	return answer;
}
