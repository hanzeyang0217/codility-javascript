/**
 * 秒杀 额 效率不对...
 * 1/29 2min => 10min 好吧基础 去习惯叭
 */
function solution(N) {
  let count = 0
  for (let i = 0; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      count += (i === N / i) ? 1 : 2
    }
  }
  return count
}
// function solution(N) {
//   let count = 0;
//   for (let i = 1; i <= N; i++) {
//     if (N % i === 0) count++
//   }
//   return count
// }
// solution(24); //8
