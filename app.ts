function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log("Result: " + num)
}

printResult(add(5, 12))

let combineValues: (a: number, b: number) => number
combineValues = add
// combineValues = printResult

console.log(combineValues(8, 8))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2
  cb(res)
}

addAndHandle(10, 20, (res) => {
  console.log(res)
})
