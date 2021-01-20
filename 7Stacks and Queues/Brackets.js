function solution(S) {
  S = Array.from(S)
  const inStack = ["{", "[", "("]
  const stack = []
  let r = 1
  for (let i = 0; i < S.length; i++) {
    if (inStack.indexOf(S[i]) !== -1) {
      stack.push(S[i])
    } else {
      const s = stack[stack.length - 1]
      if (!((s === '{' && S[i] === '}') || (s === '[' && S[i] === ']') || (s === '(' && S[i] === ')'))) {
        r = 0
        break
      }else{
        stack.pop()
      }
    }
  }
  return stack.length === 0 ? r : 0
}

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