function combine(input1, input2, resultConversion) {
    var res;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
    //   if (resultConversion === "as-number") {
    //     return +res
    //   } else {
    //     return res.toString()
    //   }
}
var combineAges = combine(30, 26, "as-number");
console.log(combineAges);
var combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
var combineNames = combine("Senad", "Zukorlic", "as-text");
console.log(combineNames);
