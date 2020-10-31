let a = 'hello';
let b = a;
console.log(a, b);

b = 'bye';
console.log(a, b);
// bのみbyeに変更される

let c = {
  prop: 'hello'
}
let d = c;
console.log(c, d);

d.prop = 'bye'
console.log(c, d);
// どちらもbyeに変更される

d = {};
console.log(c, d);
// dに新しいオブジェクトを設定し直すとdは新しいオブジェクトへの
// 参照を保持するようになる。