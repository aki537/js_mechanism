function a(name) {
  return 'hello ' + name;
}

// const b = function(name) {
//   return 'hello ' + name;
// }

// 引数が一つ
// const b = name =>  'hello ' + name;

// 引数が2つ以上の場合
// const b = (name, name1) =>  'hello ' + name + ' ' + name1;

// 引数がない場合
const b = () =>  'hello ';
// const b = () => {
//   return 'hello '};
// const b = _ =>  'hello ';

console.log(b('Tom', 'Bob'));
