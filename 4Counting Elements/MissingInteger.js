/**
 * 1/11 10min 没问题不过再来一遍叭
 * 1/17 20min
 * # 学到
 * 1. hash
 * 1/17
 * 1. 实现3行解决问题不过可能不太适合阅读
 */

function solution(A) {
  const hash = new Array(A.length).fill(false)
  A.forEach(i => {if ((i >= 0) && (!hash[i - 1])) hash[i - 1] = true})
  return hash.indexOf(false) === -1 ? hash.length + 1 : hash.indexOf(false) + 1
}

// function solution(A) {
//   A = Array.from(new Set(A))
//   const hash = new Array(A.length).fill(false)
//   A.forEach(i => {
//     if (i > 0) {
//       if (!hash[i - 1]) hash[i - 1] = true
//     }
//   })
//   let r = hash.indexOf(false)
//   if (r === -1) r = hash.length
//   return r + 1
// }

solution([1, 3, 6, 4, 1, 2]) //5
solution([1, 2, 3]) //4
solution([-1, -3]) //1
const xxx = []

for (let i = 1; i <= 100000; i++) {
  xxx[i] = i
}
let old = new Date()

solution(xxx) //1

console.log(new Date() - old)
//N = 1~
//A[N-1] = -10000~
