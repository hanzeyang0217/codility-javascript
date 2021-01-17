/**
 * 1/11 30min 没问题不过再做一遍叭
 * 1/17 25min
 * # 学到
 * 1. 用map比较帅嘛 对各个item操作的时候
 * 2. 超时这块的处理真的亮了 避免for中的for
 * 3. 三元还是多用用叭
 */

function solution(N, A) {
  /**
   * 思路1
   * 1. 遍历数组
   * 2. 根据规则操作
   * => 超时了...
   **/
  /**
   * 学到了
   * 1. 数组建立方法
   * 2. 效率 for里面的for尽量避免
   **/
  let hash = new Array(N).fill(0)
  let max = 0
  let oldMax = 0
  A.forEach((item) => {
    if (Number(item) === N + 1) {
      oldMax = max
    } else {
      hash[item - 1] >= oldMax ? hash[item - 1] += 1 : hash[item - 1] = oldMax + 1
      max = Math.max(max, hash[item - 1])
    }
  })
  return hash.map(i => i < oldMax ? oldMax : i)
}

solution(5, [3, 4, 4, 6, 1, 4, 4]) //[3,2,2,4,2]
//N M 1 ~ 100,000
//A[] 1 ~ N+1
//A[K]=X if 1≤X≤N add(X)
//A[K]=N+1 addMax()
