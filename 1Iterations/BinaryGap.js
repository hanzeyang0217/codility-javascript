/**
 * 1/11 15min
 * 1/17 15min
 *
 * # 学到
 * 1. split分割关键词
 * 2. 比大小可以用sort方便
 * # TODO
 * 用了match和正则 需要学习
 * # 更新
 * 1/17
 * 1. 直接砍掉最后一位
 * 2. 用了slice -1
 * 3. 实现一行解决问题不过可能不太适合阅读
 */
function solution(N) {
  //转二进制 > 根据1分割 > 取从第一位到倒数第二位 > 按长度排序 > 返回最长的长度
  return N.toString(2).split('1').slice(0, -1).sort((a, b) => b.length - a.length)[0].length
}

// function solution(N) {
//   const binaryArr = N.toString(2).split('1')
//   if (binaryArr[binaryArr.length - 1] !== '') binaryArr.pop()
//   binaryArr.sort((a, b) => b.length - a.length)
//   return binaryArr[0].length
// }

solution(9) //1001 2
solution(529) //1000010001 4
solution(20) //10100 1
solution(32) //100000 0
solution(1041) //10000010001 5
//N = 1 ~ 2147483647

