function a() {
  let b = 0;
  console.log(b);
}
// console.log(b); これは関数の外からは呼び出せない
a();

// ブロックは{}のことを表す
{
  let c = 1;
  // varを使うとブロックスコープが無視されて表示できちゃうから使用するのはよろしくない
  console.log(c);
  const d = function() {
    console.log('d is called');
  }
}
// console.log(c); ブロックスコープ外だとエラーがでる
// d();　無名関数だとエラーになる　普通の関数だと表示できちゃう
// 基本的にブロックスコープはif文と一緒に使用される