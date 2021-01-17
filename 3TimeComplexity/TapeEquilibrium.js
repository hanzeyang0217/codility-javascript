/**
 * 1/11 20min 有问题
 * 1/17 10min 差不多
 * # 问题
 * 1. 最后一刀是不能切的 注意读题目
 * # 学到
 * 1. 累加用reduce
 * 2. 比较用Math.min
 * 3. Infinity用到实战中
 * 1/17
 * 1. 实现3行解决问题不过可能不太适合阅读
 */
function solution(A) {
  const sum = A.reduce((a, b) => a + b)
  let left = 0
  return A.map(i => Math.abs((left += i) * 2 - sum)).slice(0, -1).sort((a, b) => a - b)[0]
}

// function solution(A) {
//   let totalSum = A.reduce((a, b) => a + b)
//   let sum = 0
//   let min = Infinity
//
//   for (let i = 0; i < A.length - 1; i++) {
//     sum += A[i]
//     min = Math.min(min, Math.abs(sum - (totalSum - sum)))
//   }
//   return min
// }

//确实他的好
// function solution(A) {
//   let sum = 0
//   A.forEach((i) => (sum += i))
//   let r = []
//   let newSum = 0
//   for (let i = 0; i < A.length - 1; i++) {
//     newSum += Number(A[i])
//     r.push(Math.abs(newSum - (sum - newSum)))
//   }
//   r.sort((a, b) => a - b)
//   return r[0]
// }


// solution([3, 1, 2, 4, 3]) //1
solution([-1000, 1000]) //2000
