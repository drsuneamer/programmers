// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
	var answer = "";

	for (let x of s) {
		if (x === " ") answer += " ";
		else {
			let c = x.charCodeAt();
			// 대문자인 경우
			if (c < 96) {
				let code = c + n;
				if (code > 90) code -= 26;
				answer += String.fromCharCode(code);
			}
			// 소문자인 경우
			else {
				let code = c + n;
				if (code > 122) code -= 26;
				answer += String.fromCharCode(code);
			}
		}
	}
	return answer;
}
