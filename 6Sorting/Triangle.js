/**
 * 1/20 1h
 * 1/22 10min 不过有失误 因为从小到大已经排序了 所以只要比最小的和第二小的是不是能比第三小的大就可以了 逻辑上
 * 果然身体不舒服
 * 题目读错 有的话返回1 没的话返回0
 * 三角只会成立在接近的数字里
 * 如果for到后面没有了 不会成立所以放心大胆的那个啥
 * @param A
 * @returns {number}
 */

function solution(A) {
  A.sort((a, b) =>  a - b)
  for (let i = 0; i < A.length; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      return 1;
    }
  }
  return 0
}

// solution([10, 2, 5, 1, 8, 20]) //1 10 5 8
// solution([10, 50, 5, 1])//0
solution([1, 1, 1, 1, 5, 5, 5])//1
