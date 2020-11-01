const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a === b);
// オブジェクトを比較する場合は変数a,bの入ってるのは
// オブジェクトへの参照になるため、それぞれオブジェクトの
// 参照先は変わってくるためfalseが返る

console.log(a.prop === b.prop);
// true

const c = a;

console.log(a === c);
// true