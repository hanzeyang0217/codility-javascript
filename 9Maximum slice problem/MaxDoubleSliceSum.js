/**
 * 不会 看了答案也不会 困了
 * 总算搞定 反正就按题目说的逻辑来
 * 切片 全都写出来 然后倒推需要什么 然后做出来
 * 1/24 2h
 * 1/25 1h 年纪大了 习惯叭
 * @param A
 * @returns {number}
 */
function solution(A) {
  const left = A.map(e => 0)
  const right = A.map(e => 0)
  for (let i = 1; i < A.length - 1; i++) {
    left[i] = Math.max(A[i] + left[i - 1], 0)
  }
  for (let i = A.length - 2; i >= 0; i--) {
    right[i] = Math.max(A[i] + right[i + 1], 0)
  }
  let max = 0
  for (let i = 1; i < A.length - 1; i++) {
    const maxSum = left[i - 1] + right[i + 1]
    /**
     * left
     * 1 0
     * 2 2
     * 3 2+6
     * 4 2+6-1
     * right
     * 1 6-1+4+5
     * 2 -1+4+5
     * 3 4 + 5
     * 4 5
     * 5 -1 => 0
     * 6 0
     */
    max = Math.max(max, maxSum)
  }
  // console.log(max)
  return max
}

solution([3, 2, 6, -1, 4, 5, -1, 2])
// solution([5, 5, 5]) //0
// solution([5, 17, 0, 3])//17
// solution([6, 1, 5, 6, 4, 2, 9, 4])//26