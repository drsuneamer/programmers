// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
	let a = 0;
	let b = 0;
	for (let p of polynomial.split(" + ")) {
		if (p.includes("x")) {
			p === "x" ? (a += 1) : (a += Number(p.split("x")[0]));
		} else b += Number(p);
	}
	if (a === 0) {
		return String(b);
	} else if (b === 0) {
		if (a === 1) {
			return "x";
		} else {
			return a + "x";
		}
	} else {
		if (a === 1) {
			return ["x", "+", b].join(" ");
		} else {
			return [a + "x", "+", b].join(" ");
		}
	}
}
