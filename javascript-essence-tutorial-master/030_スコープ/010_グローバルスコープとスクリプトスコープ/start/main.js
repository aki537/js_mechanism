let a = 0;
var b = 0;
function c() {}

// debugger;
// これを書くとブラウザで実行中に一時停止される
// varやfuncitionで定義した値はwindowオブジェクトのプロパティの中に保持される
// letやconstはスクリプトの中に保持される

console.log(window.b);
// windowがついててもついてなくても出力結果は同じ

window.d = 1;
let d = 2;
console.log(d);