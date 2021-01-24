/**
 * 1/11 10min 没问题不过再来一遍叭
 * 1/17 10min
 * # 学到
 * 1. hash和sort真好用
 */
function solution(A) {
  const hash = new Array(A.length).fill(false)
  A.forEach(i => {
    if (!hash[i - 1]) hash[i - 1] = true
  })
  return hash.indexOf(false) === -1 ? 1 : 0
}
/**
 * # 想法1 => 阔以
 * 1. 排序
 * 2. 遍历一下 index有不一致的就返回0
 * # 想法2 => 不行 他专门弄了一个sum对的不是排列组合的情况
 * 1. 根据长度高斯求和
 * 2. 遍历 减下去不等于0的话返回0
 * # 想法3 => 阔以
 * 1. 遍历 hash
 * 2. 遍历hash 有false的话返回0
 **/
// function solution(A) {
//   A.sort((a, b) => a - b)
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] !== i + 1) return 0
//   }
//   return 1
// }

// function solution(A) {
//   let sum = (1 + A.length) * A.length / 2
//   A.forEach(i => sum -= i)
//   return sum === 0 ? 1 : 0
// }



solution([4, 1, 3, 2]) //1
solution([4, 1, 3]) //0
//N 1 ~ 100,000
//A[n-1] 1 ~ 1,000,000,000