// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

function solution(lines) {
	let answer = 0;
	let obj = {};
	for (let l of lines) {
		for (let ll = l[0]; ll < l[1]; ll++) {
			if (Object.keys(obj).includes(String(ll))) {
				obj[ll]++;
			} else obj[ll] = 1;
		}
	}
	for (let a of Object.keys(obj)) {
		if (obj[a] !== 1) {
			answer++;
		}
	}
	return answer;
}
