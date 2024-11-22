// 19번 문제 정수 제곱근 판별

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 입출력 예
// n	return
// 121	144
// 3	-1

// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.


// n 나누기 소수의 나머지가 0이면 문제 위의 값 반환
// 1. 소수를 구해
// 2. 소수를 하나씩 불러와서 대입 해봐야하는데
// 3. 반복문으로...

// function solution(n) {
//     let answer = 0;
//     let strNum = String(n);
//     for(let i1 = 2; i1 < n.length; i1++) {

//     }
//     for(let i2 = 2; i2 < num1; i2 += decimal) {

//     }
// }


// 소수 구하는 코드 ? 

// function solution(n) {
//     // 0이 포함되기 때문에 입력받은 수보다 하나 크게
//     const arr = Array.from({ length: n + 1 }).fill(true);
//     arr[0] = arr[1] = false;
//     const sqrt = parseInt(Math.sqrt(n));
  
//     for (let i = 2; i <= sqrt; i++) {
//       if (arr[i] === true) {
//         for (let j = 2; i * j <= n; j++) {
//           arr[i * j] = false;
//         }
//       }
//     }
  
//     return arr.filter((v) => v === true).length;
//   }




// 오답... 시간이 너무 오래걸림

// function solution(n) {
//     let answer = -1;
//     let x = 2;
//     while (x !== n){
//         if(n % x === 0){
//             while (x * x === n){
//             let b = ++x;
//             answer = b* b;
//             }
//         }
//         x++;
//     }
//     return answer;
// }