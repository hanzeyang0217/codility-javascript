/**
 * 跟上一题一样 根据逻辑走
 * 1/24 15min
 * 1/25 30min 需要再练练
 * 1/27 30min 需要再练练
 * 1/29 5min 额 一不小心记住了...
 * 2/2  10min 额 貌似记住了...
 * @param A
 * @returns {*}
 */
function solution(A) {
  let max = -Infinity
  let sliceMax = -Infinity
  for (let i = 0; i < A.length; i++) {
    sliceMax = Math.max(A[i], sliceMax + A[i])
    max = Math.max(max, sliceMax)
  }
  return max
}
solution([3, 2, -1, 4, 0]); //8
solution([3, 2, -6, 4, 2]); //6
// solution([3, 2, -6, 4, 0]) //5
// solution([5, -4, 3])//5