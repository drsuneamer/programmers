// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
	// 현재 가장 가까운 수, 차이
	let arr = [101, 101];
	for (let a of array) {
		if (Math.abs(n - a) < arr[1]) {
			arr = [a, Math.abs(n - a)];
		} else if (Math.abs(n - a) == arr[1]) {
			arr = [Math.min(a, arr[0]), Math.abs(n - a)];
		}
	}
	return arr[0];
}
