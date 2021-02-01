/**
 * 1/11 15min
 * 1/17 15min
 * 2/1  10min
 *
 * # 学到
 * 0. toString转成2进制
 * 1. 因为1是关键字 可以用split分割
 * 2. 最后一位不需要 其实pop可以但是想一行解决就用了slice -1
 * 3. 比大小用了sort 返回第一位长度
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

