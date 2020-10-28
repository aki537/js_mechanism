let obj = {
  prop1: 'value1',
  // プロパティの間はコンマ（,)で区切る
  prop2: 'value2',
  prop3: function() {
    console.log('value3');
  },
  prop4: {
    prop5: 'value5'
  }
  // オブジェクトのプロパティに格納された関数のことをメソッドという（上の関数のこと）
}

obj.prop3();
console.log(obj.prop1);
console.log(obj.prop4.prop5);
// オブジェクトにプロパティを追加
obj.prop6 = 'value6';
console.log(obj['prop6']);
console.log(obj);
