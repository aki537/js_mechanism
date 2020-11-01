const a = {
  prop: 0
}

let { prop } = a;
// let { prop: b } = a;
// プロパティの名前は一致させないと行けないが
// 上のように書けば変更させることができる。

prop = 1;

console.log(a, prop);
// a = {prop:0} prop = 1

// function fn(obj) {
//   let { prop } = obj;
//   prop = 1;
//   console.log(obj, prop);
// }
function fn({ prop }) {
  prop = 1;
  console.log(a, prop);
}

fn(a);

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;

console.log(c, prop1);