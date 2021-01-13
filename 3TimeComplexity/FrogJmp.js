/**
 * 1/11 5min
 *
 * # 学到
 * 1. 能用数学解决的问题用数学解决
 */
function solution(X, Y, D) {
  if (X === Y) return 0
  return Math.ceil((Y - X) / D)
}

solution(10, 85, 30) //3
//X <= Y
//X Y D 1~1000000000