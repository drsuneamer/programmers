/*
다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요
*/

function solution(board) {
    var answer = 0;
    let width = board[0].length;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 1) {
                for (let ii = -1; ii < 2; ii++) {
                    for (let jj = -1; jj < 2; jj++) {
                        if (0 <= i + ii && i + ii < width && 0 <= j + jj && j + jj < width) { if (board[i + ii][j + jj] === 0) board[i + ii][j + jj] = 2;
                        }
                    }
                }
            }
        }
    }
    
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === 0) answer++;
        }
    }
    return answer;
}