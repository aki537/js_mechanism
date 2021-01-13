// コンストラクター関数は一番最初の文字を大文字で定義する
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);