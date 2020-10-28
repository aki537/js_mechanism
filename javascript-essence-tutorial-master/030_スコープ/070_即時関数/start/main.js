// 通常の関数
function a() {
  console.log('called');
}
a();


// 即時関数
// ()をつけないとsyntaxerrorが発生する。
// 即時関数は一度しか使わないので名前をつけなくて関数を作れるから便利
(function() {
  console.log('called');
})()

let b = function() {
  console.log('called');
}

// いつ使う？
// 関数スコープを利用して関数の中でしか使えない変数や関数と外で使う変数や関数を区別する時に使う。
let c = (function() {

  let privateVal = 1;
  let publicVal = 10;
  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal++);
  }

  // returnに記述することで外部から呼び出せる
  return {
    publicVal,
    publicFn
  };
})()

c.publicFn();
console.log(c.publicVal);

// これはエラーになる
// c.privateFn();
