/**
 * 1/11 20min 没问题不过再做一遍叭
 * 1/17 10min
 */
/**
 * # 思路1
 * 1. 去重
 * 2. 判断能不能过河
 * 3. 能的话 最后一个的index就是了叭
 * 1/17
 * 1. 实现2行解决问题不过可能不太适合阅读
 **/

function solution(X, A) {
  const arr = Array.from(new Set(A))
  return (1 + X) * (X) / 2 === arr.reduce((a, b) => a + b) ? A.indexOf(arr[arr.length - 1]) : -1
}

// function solution(X, A) {
//   //能不能过河 不能-1 能计算
//   let arr = Array.from(new Set(A))
//   let sum = (1 + X) * X / 2
//   let r = arr.reduce((a, b) => a - b, sum)
//   if (r !== 0) return -1
//   return A.indexOf(arr[arr.length - 1])
// }
//
// //大佬用了hash表
// function solution(X, A) {
//   let hash = {}
//   let sum = (X * (X + 1)) / 2
//
//   for (let i = 0; i < A.length; i++) {
//     if (!hash[A[i]]) {
//       hash[A[i]] = true
//       sum -= A[i]
//       if (sum === 0) {
//         return i
//       }
//     }
//   }
//   return -1
// }

solution(5, [1, 3, 1, 4, 2, 3, 5, 4])//6
//N X 1 ~ 100000
//A[] 1 ~ X




