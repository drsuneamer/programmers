// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numlist, n) {
	var answer = [];
	let dis = {};
	for (let num of numlist) {
		let d = Math.abs(n - num);
		if (dis.hasOwnProperty(d)) dis[d].push(num);
		else dis[d] = [num];
	}
	let sorted = Object.fromEntries(
		Object.entries(dis).sort(([a], [b]) => (a < b ? -1 : 1))
	);
	for (let s of Object.keys(sorted)) {
		for (let t of sorted[s].sort((a, b) => b - a)) {
			answer.push(t);
		}
	}
	return answer;
}
