// 関数の実行前に関数はメモリ上に存在するので前に書いても出力される
a();

function a(){
  console.log(c);
  var c = 1;
  // 関数内でも同じくエラーが出る

  // 同じく関数なら前でも出力される
  d();
  function d(){
    console.log('d is called');
  }
  console.log('a is called');
}

// 変数は上に書いてもundifinedと表示されできない。
console.log(b);

var b = 0;
// console.log(b);

let b = 0;
// これでもエラーがでる
// こっちはundefinedではなくエラーがでるのでこっちのほうが良い
