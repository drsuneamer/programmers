// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
	var answer = 0;

	let cnt = new Object();

	for (let i = 0; i < array.length; i++) {
		if (Object.keys(cnt).includes(String(array[i]))) cnt[String(array[i])]++;
		else cnt[array[i]] = 1;
	}

	let answers = [];
	let max = Math.max(...Object.values(cnt));

	for (let key in cnt) {
		if (cnt[key] === max) {
			answers.push(key);
		}
	}

	if (answers.length > 1) {
		answer = -1;
	} else answer = answers[0];

	return Number(answer);
}
