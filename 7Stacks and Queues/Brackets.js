/**
 * 1/22 15min 不过我限制了入口 答案没有限制 他那种也写一下叭
 * @param S
 * @returns {number}
 */
//不考虑入口的代码确实短w
function solution(S) {
  const stackList = []
  const outStack = ["()", "{}", "[]"]
  for (let i=0; i<S.length; i++) {
    if (outStack.indexOf(stackList[stackList.length - 1] + S[i])!==-1){
      stackList.pop()
    }else{
      stackList.push(S[i])
    }
  }
  return stackList.length === 0 ? 1 : 0
}
// function solution(S) {
//   S = Array.from(S)
//   const inStack = ["{", "[", "("]
//   const stack = []
//   let r = 1
//   for (let i = 0; i < S.length; i++) {
//     if (inStack.indexOf(S[i]) !== -1) {
//       stack.push(S[i])
//     } else {
//       const s = stack[stack.length - 1]
//       if (!((s === '{' && S[i] === '}') || (s === '[' && S[i] === ']') || (s === '(' && S[i] === ')'))) {
//         r = 0
//         break
//       }else{
//         stack.pop()
//       }
//     }
//   }
//   return stack.length === 0 ? r : 0
// }

// solution("{[()()]}") //1
// solution(")(") //0
solution("{{{{") //0
// solution("{[()()()]}") //1
// solution("([)()()]") //0

// solution(`
// {
//   [
//     ()
//     ()
//   ]
//  }
//  `) //1