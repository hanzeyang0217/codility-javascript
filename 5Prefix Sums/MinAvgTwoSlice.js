/**
 * 1/19 10min
 * 1/19 5min
 * 1/24 10min
 * 2/1  不会 平均数2个或者3个好神奇
 * 2/2  5min
 * # 重点
 * 1. 读题 最小片段一定有2个以上 所以i从1开始
 * 2. 平均数其实就只有2种情况 2个还是3个
 **/
function solution(A) {
  let min = {
    value: Infinity,
    position: 0
  }
  for (let i = 1; i < A.length; i++) {
    if (min.value > (A[i - 1] + A[i]) / 2) min = {value: (A[i - 1] + A[i]) / 2, position: i - 1}
    if (min.value > (A[i - 1] + A[i] + A[i + 1]) / 3) min = {value: (A[i - 1] + A[i] + A[i + 1]) / 3, position: i - 1}
  }
  return min.position
}
/**
 * 好难
 * # 想法1
 * 1. 切两刀
 * 2. 所有情况的结果放进数组
 * 3. sort
 * 1/18 40min
 * # 看了答案 懂了 关键是最小单位2个 所以要么2个要么3个里面就会有答案
 **/
// function solution(A) {
//   const arr = []
//   for (let i = 1; i < A.length; i++) {
//     for (let j = 0; j < i; j++) {
//       arr.push({
//         index: j,
//         arr: A.slice(j, i + 1)
//       })
//     }
//   }
//   return arr.map(a => {
//     return {
//       index: a.index,
//       value: a.arr.reduce((a, b) => a + b) / a.arr.length
//     }
//   }).sort((a, b) => {
//     if (a.value > b.value) {
//       return 1
//     } else if (a.value < b.value) {
//       return -1
//     } else {
//       return a.index - b.index
//     }
//   })[0].index
// }

// function solution(A) {
//   let min = Infinity
//   let position
//   for (let i = 1; i < A.length; i++) {
//     if (min > (A[i - 1] + A[i]) / 2) {
//       min = (A[i - 1] + A[i]) / 2
//       position = i - 1
//     }
//     if (min > (A[i - 1] + A[i] + A[i + 1]) / 3) {
//       min = (A[i - 1] + A[i] + A[i + 1]) / 3
//       position = i - 1
//     }
//   }
//   return position
// }

solution([4, 2, 2, 5, 1, 5, 8]) //1
// solution([1, 2, 3, 4, 5, 6, 7]) //0
// solution([10000, -10000]) //0
// solution([-3, -5, -8, -4, -10]) //2
