/**
 * 有点难得嘛
 * 1/24 1h
 * 1/25 15min 俺这次是做减法 因为相同的时候才可以共用嘛 所以减减 然后第一个肯定是一块嘛 一开始就取了length 其实多了一个 到时候会自己减掉
 *
 * # 重点
 * 1. 弹栈的地方的逻辑
 * 2. 以及从大到小之后的break 好吧其实就是一个while
 * @param H
 * @returns {number}
 */
function solution(H) {
  const wall = []
  let count = H.length
  H.forEach((i) => {
    if (wall.length === 0) {
      wall.push(i)
    } else {
      for (let j = wall.length - 1; j >= 0; j--) {
        if (wall[j] > i) {
          wall.pop()
        } else if (wall[j] === i) {
          count--
          break
        } else {
          break
        }
      }
      wall.push(i)
    }
  })
  return count
}
// function solution(H) {
//   let stack = []
//   let r = 0
//   H.forEach((e) => {
//     for (let i = stack.length - 1; i >= 0; i--) {
//       if (stack[i] > e) {
//         stack.pop()
//       } else {
//         break
//       }
//     }
//     if (stack[stack.length - 1] !== e) {
//       stack.push(e)
//       r++
//     }
//   })
//   return r
// }

solution([8, 8, 5, 7, 9, 8, 7, 4, 8]) //7