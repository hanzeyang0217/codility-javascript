/**
 * 啊哈 秒了
 * 1/19 5min
 **/
// function solution(A) {
//   return Array.from(new Set(A)).length
// }
// 如果不用set呢
//先先想到了hash但是如果突然出现不连贯数字感觉会悲剧
//push叭
//啊 加个计数器就好了嘛...
function solution(A) {
  const hash = []
  let c = 0
  A.forEach((i) => {
    if (!hash[i]) {
      hash[i] = true
      c++
    }
  })
  return c
}

solution([2, 1, 1, 2, 3, 1])//3