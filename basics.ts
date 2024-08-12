function add(n1: number, n2: number, showRes: boolean, phrase: string) {
  const res = n1 + n2
  if (showRes) {
    console.log(phrase + res)
  } else {
    return n1 + n2
  }
}

const number1 = 5.8
const number2 = 2
const printRes = true
const resultPhrase = "Result is: "
add(number1, number2, printRes, resultPhrase)
