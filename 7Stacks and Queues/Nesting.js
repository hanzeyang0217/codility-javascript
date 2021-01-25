/**
 * 跟 Brackets一摸一样...转成数组以后会没时间 直接用字符串遍历叭
 * 1/24 10min
 * 1/25 10min
 * @param S
 * @returns {number}
 */
function solution(S) {
  const stack = []
  for (let i=0; i<S.length; i++) {
    if (stack[stack.length - 1] + S[i] === '()'){
      stack.pop()
    }else{
      stack.push(S[i])
    }
  }
  return stack.length === 0 ? 1 : 0
}

solution("(()(())())")//1
solution("())")//0