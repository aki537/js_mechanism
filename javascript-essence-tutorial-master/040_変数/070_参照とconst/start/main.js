// const a = 'hello';
// a = 'bye'; //エラーが発生

const b = {
  prop: 'hello'
}
// b = {} //エラー
b.prop = 'bye';
console.log(b); //プロパティの値のみは変更できる