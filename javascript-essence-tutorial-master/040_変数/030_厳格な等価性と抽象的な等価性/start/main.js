function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

// console.log(a === b);
// 厳格な等価性は型まで比較するので'false'となる

// console.log(a == b);
// 抽象的な等価性は型を比較しないので'true'となる


let c = true

// console.log(c === Boolean(b));
// Boolean(b)はtrue(整数はtrue, 0だとfalseになる)

// printEquality(b, c);

let e = "";
let f = 0;

// console.log(Boolean(e) === Boolean(f));
// printEquality(e,f);

let g = null;
let h; //undefined

printEquality(g, h);

// なるべく厳格な等価性を使用して判定を行う

