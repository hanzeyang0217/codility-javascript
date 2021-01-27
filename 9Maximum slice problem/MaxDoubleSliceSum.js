/**
 * 不会 看了答案也不会 困了
 * 总算搞定 反正就按题目说的逻辑来
 * 切片 全都写出来 然后倒推需要什么 然后做出来
 * 1/24 2h
 * 1/25 1h 年纪大了 习惯叭
 * 1/27 20min 渐渐习惯了点
 * @param A
 * @returns {number}
 */
function solution(A) {
  let max = -Infinity
  const left = new Array(A.length).fill(0)
  const right = new Array(A.length).fill(0)
  for (let i = 1; i < A.length - 1; i++) {
    left[i] = Math.max(left[i - 1] + A[i], 0)
  }
  for (let i = A.length - 2; i > 0; i--) {
    right[i] = Math.max(right[i + 1] + A[i], 0)
  }
  // console.log(left)
  // console.log(right)
  for (let i = 1; i < A.length - 1; i++) {
    max = Math.max(max, left[i-1] + right[i+1])
  }

  /**
   * left
   * 0, 2, 8,7,11,16,15,0
   * right
   * 0,16,14,8, 9, 5, 0,0
   */
  return max
  // console.log(max)
}

solution([3, 2, 6, -1, 4, 5, -1, 2])//17
// solution([5, 5, 5]) //0
// solution([5, 17, 0, 3])//17
// solution([6, 1, 5, 6, 4, 2, 9, 4])//26