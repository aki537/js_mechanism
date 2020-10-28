// プライベート変数
// 関数の内部に変数を持ちながらも外部からはアクセスでいないようにする。

// let num = 0;



function incrementFactory() {
  let num = 0;

  function increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

// num = 0;
// increment();

const increment = incrementFactory();

increment();
increment();
increment();