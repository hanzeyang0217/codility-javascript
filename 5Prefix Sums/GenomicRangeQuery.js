/**
 * # 想法1
 * 1. 遍历M次
 * 2. 每次可以获得一个长度截取DNA
 * 3. 截取的DNA里面找到最小数返回
 **/

// function solution(S, P, Q) {
//   const hesuan = ['A', 'C', 'G', 'T']
//   const r = []
//   for (let i = 0; i < P.length; i++) {
//     let DNA = S.slice(P[i], Q[i] + 1)
//     if (DNA.indexOf(hesuan[0]) !== -1) {
//       r[i] = 1
//     } else if (DNA.indexOf(hesuan[1]) !== -1) {
//       r[i] = 2
//     } else if (DNA.indexOf(hesuan[2]) !== -1) {
//       r[i] = 3
//     } else if (DNA.indexOf(hesuan[3]) !== -1) {
//       r[i] = 4
//     }
//   }
//   return r
// }
//大佬的逼格更高 模仿一下
function solution(S, P, Q) {
  /**
   * # 想法2
   * 1. 拿到每段DNA
   * 2. 返回每段最小值
   **/
  let DNA = P.map((item, i) => S.slice(item, Q[i] + 1))
  return DNA.map(i => {
    if (i.indexOf('A') > -1) {
      return 1
    } else if (i.indexOf('C') > -1) {
      return 2
    } else if (i.indexOf('G') > -1) {
      return 3
    } else if (i.indexOf('T') > -1) {
      return 4
    }
  })
}

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]); // [2, 4, 1]
//N 1~100,000
//M 1~50,000
//P Q 0 ~ N-1

//A 1
//C 2
//G 3
//T 4
