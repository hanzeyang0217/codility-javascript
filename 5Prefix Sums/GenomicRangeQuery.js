/**
 * 1/17 20min
 **/
//不开心没想通 为啥这个费效率...
function solution(S, P, Q) {
  const obj = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  }
  return P.map((item, i) => Array.from(new Set(Array.from(S).map(i => obj[i]).slice(item, Q[i] + 1))).sort((a, b) => a - b)[0])
}

//大佬的逼格更高 模仿一下
// function solution(S, P, Q) {
//   /**
//    * # 想法2
//    * 1. 拿到每段DNA
//    * 2. 返回每段最小值
//    **/
//   let DNA = P.map((item, i) => S.slice(item, Q[i] + 1))
//   return DNA.map(i => {
//     if (i.indexOf('A') > -1) {
//       return 1
//     } else if (i.indexOf('C') > -1) {
//       return 2
//     } else if (i.indexOf('G') > -1) {
//       return 3
//     } else if (i.indexOf('T') > -1) {
//       return 4
//     }
//   })
// }

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

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]) // [2, 4, 1]
//2-4 GCC
//5-5 T
//0-6 CAGCCTA
solution("TC", [0, 0, 1], [0, 1, 1]) // [4, 2, 2]
//0-0 T
//0-1 TC
//1-1 C
//N 1~100,000
//M 1~50,000
//P Q 0 ~ N-1

//A 1
//C 2
//G 3
//T 4
