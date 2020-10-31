function hello(name) {
  console.log(`Hello ${name}`);
}

// hello('Bob');
hello(); //Hello undifined

function hello(name) {
  // if(!name) {
  //   name = 'Tom';
  // }
  name = name || 'Tom'; //nameがfalthyの場合Tomが代入される
  console.log(`Hello ${name}`);
}

hello('Bob');

// ES6からはデフォルト引数というのが設定できる。
// function hello(name = 'Tom') {
//   console.log(`Hello ${name}`);
// }

// OR条件で数字を扱う際は注意！
// 0もfalthyとなるので使えない

let name = 'Bob';
// if (name) {
//   hello(name);
// }  

// nameがtruthyの場合helloの関数が実行され'Hello Bob'と出力される
// letのBobを消せばfalthyとなるのでTomになる
name && hello(name);