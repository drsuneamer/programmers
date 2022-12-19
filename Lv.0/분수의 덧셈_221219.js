// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(denum1, num1, denum2, num2) {
	var answer = [];
	let denum = denum1 * num2 + denum2 * num1;
	let num = num2 * num1;

	for (let i = denum; i > 0; i--) {
		if (denum % i === 0 && num % i === 0) {
			denum = denum / i;
			num = num / i;
			break;
		}
	}

	answer.push(denum, num);
	return answer;
}
