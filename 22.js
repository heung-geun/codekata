// >> 22번 문제: 두 정수 사이의 합

// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한
// 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

// function solution(a, b) {
//     let answer = 0;
//     if(a < b){
//         for(let i = a; i <= b; i++){
//             answer += i;
//         }
//     }else {
//         for(let i = b; i <= a; i++){
//             answer += i;
//         }
//     }
//     return answer;
// }
// console.log(solution(3, 5));
// console.log(solution(3, 3));
// console.log(solution(5, 3));
// console.log(solution(-1, 5));

