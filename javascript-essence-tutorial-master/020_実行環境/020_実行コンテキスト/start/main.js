// グローバルコンテキストはjavascript直下の実行環境
let a = 0;
function b() {
  // この中が関数コンテキスト
  console.log(this, arguments, a)
}

console.log(a);
b();

// 関数コンテキストは関数の中のナビブロックで囲まれてる中の実行環境