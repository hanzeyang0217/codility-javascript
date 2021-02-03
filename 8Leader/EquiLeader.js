/**
 * 1/24 1h 不知道因为累了还是啥 弄了好久
 * 1/25 10min
 * 1/27 15min
 * 2/2  10min
 * # 重点
 * 1. hash搞出目标数据
 * 2. 遍历原数组计数
 *
 * @param A
 * @returns {number}
 */
function solution(A) {
  const hash = []
  const lead = {
    number: undefined,
    total: 0,
    count: 0,
    result: 0
  }
  A.forEach(i => {
    if (!hash[i]) hash[i] = 0
    hash[i]++
    if (hash[i] > A.length / 2) {
      lead.total = hash[i]
      lead.number = i
    }
  })
  for (let i = 0; i < A.length; i++) {
    if (A[i] === lead.number) lead.count++
    if (
      (i + 1) / 2 < lead.count &&
      (A.length - i - 1) / 2 < (lead.total - lead.count)
    ) lead.result++
  }
  return lead.result
}

solution([4, 3, 4, 4, 4, 2])
solution([-1000000000, -1000000000])
