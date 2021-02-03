/**
 * 1/25 10min
 * 1/26 20min
 * 1/27 10min
 * 2/2  10min 凭感觉做的
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
  let min = Infinity
  let money = 0
  for (let i = 0; i < A.length; i++) {
    min = Math.min(min, A[i])
    money = Math.max(money, A[i] - min)
  }
  return money

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
