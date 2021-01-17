/*
* 题目莫名其妙 先pass
**/
function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K)
}

//正常些速度有问题 直接找规律就好了
// function solution(A, B, K) {
//   let count1 = A / K;
//   Number.isInteger(count1) === true
//     ? (count1 -= 1)
//     : (count1 = Math.trunc(count1));
//   return Math.trunc(B / K) - count1;
// }
solution(6, 11, 2) //3
solution(0, 0, 11) //1