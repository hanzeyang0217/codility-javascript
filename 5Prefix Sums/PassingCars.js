/**
 * 1/19 5min
 * 1/19 5min
 * 1/24 5min
 * 就是普通计数 向左边的车来的时候 前面向右的车会交汇所以相加
**/
function solution(A) {
  let right = 0
  let count = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) right++
    if (A[i] === 1) count += right
  }
  return count > 1000000000 ? -1 : count
}
//第一版 数据对的 但是O(N ** 2)
// function solution(A) {
//   let sum = 0
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 0) sum += A.slice(i + 1, A.length).filter(a => a === 1).length
//   }
//   return sum
// }

//改良 第一个for跑完以后再跑一个for 试试看
//天才!!!
//累加了以后知道1有几个
//然后就计数嘛
// function solution(A) {
//   let sum = A.reduce((a, b) => a + b)
//   let c = 0
//   let r = 0
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === 0) r += sum - c
//     if (A[i] === 1) c++
//   }
//   return r > 1000000000 ? -1 : r
// }
//还有一种想法反过来的
//每次的1*还没有到的0的数量就好了


solution([1, 0]) //0
solution([0, 1, 0, 1, 1]) //5
//1000000000 -1
