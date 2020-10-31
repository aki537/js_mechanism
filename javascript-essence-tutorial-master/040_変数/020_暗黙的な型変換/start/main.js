
// let a = 0;

// console.log(typeof a)

function printTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0;
printTypeAndValue(a);
// = number 0

let b = parseInt('1') + a;
// parseIntは文字列から数値に変換できる
printTypeAndValue(b);
// = string 10

let c = 15 - b;
printTypeAndValue(c);
// = number 5

let d = c - null;
printTypeAndValue(d);
// = number 5

let e = d - true;
printTypeAndValue(e);
// = number 4
// trueは1となる
