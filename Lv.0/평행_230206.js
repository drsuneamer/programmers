/*
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(dots) {
	var answer = 0;
	let cases = [
		[0, 2, 1, 3],
		[0, 1, 2, 3],
		[0, 3, 1, 2],
	];
	for (let c of cases) {
		if (
			(dots[c[0]][0] - dots[c[1]][0]) / (dots[c[0]][1] - dots[c[1]][1]) ===
			(dots[c[2]][0] - dots[c[3]][0]) / (dots[c[2]][1] - dots[c[3]][1])
		)
			answer = 1;
	}
	return answer;
}

// 직선의 기울기: x값 증가량 / y값 증가량
// 1-3 2-4 , 1-2 3-4 , 1-4 2-3
