function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, function (res) {
    console.log(res);
});
