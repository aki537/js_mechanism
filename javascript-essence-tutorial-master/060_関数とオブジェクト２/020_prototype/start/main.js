function Person(name, age) {
    this.name = name;
    this.age = age;
    // 下の書き方でもできる
    // this.hello = function() {
    //     console.log('hello ' + this.name);
    // }
}

// prototype.helloとすることでhelloメソッドを定義できる
Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// .helloで呼び出せる
bob.hello();
tom.hello();

// プロトタイプを使う理由
// Personを呼び出すたびにhelloを呼び出すので余分なメモリを消費する
// prototypeであれば__proto__を参照して一つにまとまるから余分なメモリを消費しない