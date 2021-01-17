/**
 * 1/11 15min
 * 1/17 10min
 *
 * # 学到
 * 1. 跟循环有关的用 % 注意 0的时候直接返回
 * 2. splice concat组合估计很好用
 * # 更新
 * 1/17
 * 1. 实现一行解决问题不过可能不太适合阅读
 */
function solution(A, K) {
  //切割原数组从(最后位减去需要移动的个数)到最后(省略)然后拼接起来
  return A.splice(A.length - (K % A.length)).concat(A)
}

// function solution(A, K) {
//   const count = K % A.length
//   if (count === 0) return A
//   return A.splice(A.length - count).concat(A)
// }

solution([3, 8, 9, 7, 6], 3) // [9, 7, 6, 3, 8]
solution([0, 0, 0], 1) // [0, 0, 0]
solution([1, 2, 3], 1) // [3, 1, 2]
solution([1, 2, 3, 4], 4) // [1, 2, 3, 4]
//N K = 0 ~ 100
//A[n-1] = -1000 ~ 1000
/**
 * [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
 * [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
 * [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
 * [9, 7, 6, 3, 8] -> [8, 9, 7, 6, 3]
 * [8, 9, 7, 6, 3] -> [3, 8, 9, 7, 6]
 **/