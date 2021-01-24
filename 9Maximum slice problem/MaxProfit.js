/**
 * 1/25 10min
 * # 这个貌似好多次了 习惯习惯
 * @param A
 * @returns {number}
 */
function solution(A) {
  let max = 0
  let min = Infinity
  for (let i = 1; i < A.length; i++) {
    min = Math.min(min, A[i - 1])
    max = Math.max(max, A[i] - min)
  }
  return max
}

solution([23171, 21011, 21123, 21366, 21013, 21367]) //356
