/**
 * 1/11 20min 有问题
 * 1/18 5min
 * 2/1  10min
 * # 问题
 * 1. 感觉题目有问题
 * 2. 他不是很在乎边界值 只管算法
 * # 学到
 * 1. 能用数学解决的问题用数学解决
 * 2. reduce减法貌似可以不过懒得看了直接用加法解决
 * 1/18
 * 1. 实现2行解决问题不过可能不太适合阅读
 * 1/24 5min 重点是读题 数组里面都是正整数切最大N+1所以可以
 * 1. 先加法求1~N+1
 * 2. 再减法剩下的就是了
 */
function solution(A) {
  if (A.length === 0) return 1
  return (2 + A.length) * (A.length + 1) / 2 - A.reduce((a, b) => a + b)
}

// function solution(A) {
//   // if (A.length <= 1) return 1
//   let sum = (2 + A.length) * (A.length + 1) / 2
//   A.forEach(i => sum -= i)
//   return sum
// }

//确实上面这个最好
//下面这个先排序 再挑出来可以是可以不过没上面好
// function solution(A) {
//   if (A.length === 0) return 1
//   A.sort((a, b) => a - b)
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== i + 1) return i + 1
//   }
//   return A.length + 1
// }


solution([]) //1
solution([1]) //2
solution([2]) //1
solution([1, 3]) //2
solution([2, 3]) //1
solution([1, 2]) //3
solution([2, 3, 1, 5]) //4
//N 0 ~ 100000
//A[]每个都不一样 1~N+1
