//正常些速度有问题 直接找规律就好了
function solution(A, B, K) {
  let count1 = A / K;
  Number.isInteger(count1) === true
    ? (count1 -= 1)
    : (count1 = Math.trunc(count1));
  return Math.trunc(B / K) - count1;
}
