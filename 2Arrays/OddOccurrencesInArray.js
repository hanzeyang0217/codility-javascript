//尼玛 太神奇了 数学真有趣 异或直接出答案
//因为 A^A一定会变成0 所以最后得出的就是那个多出来的数...太神奇了
/**
 * 1/11 10min
 * 1/17 5min
 *
 * # 学到
 * 1. 跟配对有关可能可以用到 异或 ^
 * # 更新
 * 1/17
 * 1. 实现一行解决问题不过可能不太适合阅读
 */
function solution(A) {
  return A.reduce((a, b) => a ^ b)
}


// function solution(A) {
//   let r = A[0]
//   for (let i = 1; i < A.length; i++) {
//     r ^= A[i]
//   }
//   return r
// }

solution([1, 1, 2, 2, 3]); // 3
solution([0, 1, 0]); // 1
solution([1, 2, 1]); // 2
solution([1, 2, 1, 2]); // 0
solution([9, 9, 3, 3, 9, 7, 9]) //7
