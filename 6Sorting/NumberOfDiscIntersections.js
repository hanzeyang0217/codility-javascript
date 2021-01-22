/**
 * 好难呀
 * 1/19 50min
 * 1/20 20min
 * 1/20 2h
 * 1/22 10 min
 * 他这个思路就是通过提前的排序加上之后的break让O小了一点
 * 从O(n**2) => O(N*log(N))
 * 困了 明天看看有啥更好的不
 * 发现更好的了才O(n)
 * # point1 就是sort的地方努力一下
 * 1. 越左边的(X)越前面
 * 2. 一样的X看是开还是关 开在前面 ※其实反过来关在前面也行可能 计数的逻辑需要改一下
 * # point2
 * 开跟关分开位置
 * @param A
 */
function solution(A) {
  let circleEndpoints = []
  A.forEach((i, index) => {
    circleEndpoints.push([index - i, -1])
    circleEndpoints.push([index + i, 1])
  })
  circleEndpoints.sort((a, b) => a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0])
  let openCircles = 0
  let intersections = 0
  circleEndpoints.forEach(i => {
    if (i[1] === -1) {
      intersections += openCircles
      openCircles++
    } else {
      openCircles--
    }
  })
  return intersections > 10000000 ? -1 : intersections
}

// solution([1, 0, 1,0])//4
// solution([1, 5, 2])//3
// solution([1, 5, 2, 1, 4, 0])//11
// solution([1, 1, 1]) //3
// solution([1, 1, 1, 1]) //5
// solution([1, 1, 1, 1, 1]) //7
//10000000 -1
// function solution(A) {
//   const arr = A.map((item, i) => [i - item, i + item]).sort((a, b) => a[0] - b[0])
//   let count = 0
//   arr.forEach((i, index) => {
//     for (let j = index + 1; j < arr.length; j++) {
//       if (i[1] >= arr[j][0]) {
//         count++
//       } else {
//         break
//       }
//     }
//   })
//   return count > 10000000 ? -1 : count
// }

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
