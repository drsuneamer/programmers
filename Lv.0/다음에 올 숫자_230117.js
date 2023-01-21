// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
	let a = 0;
	let b = 0;
	if (common[2] - common[1] === common[1] - common[0])
		a = common[2] - common[1];
	else if (common[2] / common[1] === common[1] / common[0])
		b = common[2] / common[1];

	if (a === 0 && b === 0) return common[common.length - 1];
	else if (a === 0) return common[common.length - 1] * b;
	else return common[common.length - 1] + a;
}
