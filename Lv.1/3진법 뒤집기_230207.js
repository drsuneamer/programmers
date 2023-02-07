//

function solution(n) {
	let ternary = "";
	let answer = 0;
	while (n > 0) {
		ternary += String(n % 3);
		n = parseInt(n / 3);
	}

	for (let x = 0; x < ternary.length; x++) {
		answer += ternary[x] * 3 ** (ternary.length - x - 1);
	}

	return answer;
}
