/**
 * 1/11 15min
 *
 * # 学到
 * 1. split分割关键词
 * 2. 比大小可以用sort方便
 * # TODO
 * 用了match和正则 需要学习
 */
function solution(N) {
  const binaryArr = N.toString(2).split('1')
  if (binaryArr[binaryArr.length - 1] !== '') binaryArr.pop()
  binaryArr.sort((a, b) => b.length - a.length)
  return binaryArr[0].length
}

solution(9) //1001 2
solution(529) //1000010001 4
solution(20) //10100 1
solution(32) //100000 0
solution(1041) //10000010001 5
//N = 1 ~ 2147483647

