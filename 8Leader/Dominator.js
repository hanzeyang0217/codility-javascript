/**
 * 1/24 20min
 * 1/25 15min
 * #重点
 * 1. 一开始排序
 * 2. index保存了一下
 * 3. 计数找到过半数的 把index放进去
 * @param A
 * @returns {number}
 */
function solution(A) {
  if (A.length === 1) return 0
  const hash = []
  let pos = -1
  A.forEach((i, index) => {
    if (hash[i] === undefined) {
      hash[i] = 1
    } else {
      hash[i]++
      if (hash[i] > A.length / 2) pos = index
    }
  })
  return pos
}
// function solution(A) {
//   if (A.length === 1) return 0
//   let dominator = {
//     value: -1,
//     count: 0,
//   }
//   A = A.map((i, index) => [i, index]).sort((a, b) => a[0] - b[0])
//   A.forEach(i => {
//     if (dominator.item !== i[0]) {
//       dominator = {item: i[0], count: 1}
//     } else {
//       dominator.count++
//       if (dominator.count > A.length / 2) dominator.value = i[1]
//     }
//   })
//   return dominator.value
// }

// solution([3, 4, 3, 2, 3, -1, 3, 3])
solution([1, 2, 1])