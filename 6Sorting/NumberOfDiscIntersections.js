/**
 * 好难呀
 * 1/19 50min
 * 他这个思路就是通过提前的排序加上之后的break让O小了一点
 * 从O(n**2) => O(N*log(N))
 * 困了 明天看看有啥更好的不
 * @param A
 */
function solution(A) {
  const arr = A.map((item, i) => [i - item, i + item]).sort((a, b) => a[0] - b[0])
  let count = 0
  arr.forEach((i, index) => {
    for (let j = index + 1; j < arr.length; j++) {
      if (i[1] >= arr[j][0]) {
        count++
      } else {
        break
      }
    }
  })
  return count > 10000000 ? -1 : count
}

/**
 * [0] 右边 >= [1]左边 count++
 * [0] 右边 >= [2]左边 count++
 * [0] 右边 >= [3]左边 count++
 * [0] 右边 >= [4]左边 count++
 * [0] 右边 >= [5]左边 count++
 * [1] 右边 >= [2]左边 count++
 * [1] 右边 >= [3]左边 count++
 * [1] 右边 >= [4]左边 count++
 * [1] 右边 >= [5]左边 count++
 */

// solution([1, 5, 2])//3
solution([1, 5, 2, 1, 4, 0])//11
solution([1, 1, 1]) //3
solution([1, 1, 1, 1]) //5
solution([1, 1, 1, 1, 1]) //7
//10000000 -1
