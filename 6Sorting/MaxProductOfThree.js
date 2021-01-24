/**
 * 1/19 15min
 * 1/20 3min
 * 1/22 2min
 * 1/23 2min
 * 就是正正正或者正负负两种情况
 * 当然可能实际上不是↑
 **/
function solution(A) {
  A.sort((a, b) => b - a)
  return Math.max(A[0] * A[1] * A[2], A[0] * A.pop() * A.pop())
}

solution([-3, 1, 2, -2, 5, 6]) //60