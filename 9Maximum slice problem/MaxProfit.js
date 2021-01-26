/**
 * 1/25 10min
 * 1/26 20min
 * # 这个貌似好多次了 习惯习惯
 * @param A
 * @returns {number}
 */
function solution(A) {
  /**
   * 因为可以当天卖 所以最低为0
   * 循环里面找出过去最小的数
   * 每次那当日去减 找到最大差额
   * @type {number}
   */
  let transaction = 0
  let min = Infinity
  for (let i = 1; i < A.length; i++) {
    min = Math.min(min, A[i - 1])
    transaction = Math.max(transaction, A[i] - min)
  }
  return transaction
}

// function solution(A) {
//   let max = 0
//   let min = Infinity
//   for (let i = 1; i < A.length; i++) {
//     min = Math.min(min, A[i - 1])
//     max = Math.max(max, A[i] - min)
//   }
//   return max
// }

solution([23171, 21011, 21123, 21366, 21013, 21367]) //356
