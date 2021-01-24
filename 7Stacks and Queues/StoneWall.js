/**
 * 有点难得嘛
 * 1/24 1h
 * # 重点
 * 1. 弹栈的地方的逻辑
 * 2. 以及从大到小之后的break 好吧其实就是一个while
 * @param H
 * @returns {number}
 */
function solution(H) {
  let stack = []
  let r = 0
  H.forEach((e) => {
    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] > e) {
        stack.pop()
      } else {
        break
      }
    }
    if (stack[stack.length - 1] !== e) {
      stack.push(e)
      r++
    }
  })
  return r
}

solution([8, 8, 5, 7, 9, 8, 7, 4, 8]) //7