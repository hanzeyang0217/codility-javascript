/**
 * 1/24 2h
 * 1/25 15min
 * # 重点
 * 1. 1进栈 0开始出栈
 * 2. stack先入后出 从后面开始比输的弹栈
 * @param A
 * @param B
 * @returns {number}
 */
function solution(A, B) {
  const stack = []
  let safe = 0
  A.forEach((i, index) => {
    if (B[index] === 1) {
      stack.push(i)
    } else if (B[index] === 0) {
      for (let j = stack.length -1 ; j >= 0; j--) {
        if (stack[j] < i) {
          stack.pop()
        } else {
          break
        }
      }
      if (stack.length === 0) safe++
    }
  })
  return safe + stack.length
}

// function solution(A, B) {
//   const fishList = A.map((size, index) => {
//     return {
//       size: size,
//       direction: B[index],
//     }
//   })
//   let countLeft = 0
//   let rightFishList = []
//   fishList.forEach((fish, i) => {
//     if (fish.direction === 0) {
//       for (let j = rightFishList.length - 1; j >= 0; j--) {
//         if (rightFishList[j].size < fish.size) {
//           rightFishList.pop()
//         } else {
//           break
//         }
//       }
//       if (rightFishList.length === 0) countLeft++
//     } else if (fish.direction === 1) {
//       rightFishList.push(fish)
//     }
//   })
//   return countLeft + rightFishList.length
// }
solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])