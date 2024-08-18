function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let res
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    res = +input1 + +input2
  } else {
    res = input1.toString() + input2.toString()
  }
  return res
  //   if (resultConversion === "as-number") {
  //     return +res
  //   } else {
  //     return res.toString()
  //   }
}

const combineAges = combine(30, 26, "as-number")
console.log(combineAges)

const combineStringAges = combine("30", "26", "as-number")
console.log(combineStringAges)

const combineNames = combine("Senad", "Zukorlic", "as-text")
console.log(combineNames)
