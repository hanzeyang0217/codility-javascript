/**
 * 跟上一题一样 根据逻辑走
 * 1/24 15min
 * @param A
 * @returns {*}
 */
function solution(A) {
  let max = A[0]
  let slice = A[0]
  for (let i = 1; i < A.length; i++) {
    slice = Math.max(A[i], slice + A[i])
    max = Math.max(max, slice)
  }
  return max
}

// solution([3, 2, -6, 4, 0]) //5
// solution([5, -4, 3])//5