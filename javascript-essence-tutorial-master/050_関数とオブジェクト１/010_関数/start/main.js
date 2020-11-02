//bはデフォルト値
function fn() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
}

fn(0, 1);

let c = fn(1, undefined);
console.log(c);

// bだけに渡したい場合
// fn(null, 1);

// function fn(a, b) {
//   console.log(2);
// }