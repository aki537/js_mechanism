function hello (name) {
  console.log('hello ' + name);
}

function bye () {
  console.log('bye');
}

function fn(cb) {
  cb('Tom');
}

fn(hello);
fn(bye);
// この渡してる関数(hello,bye)をコールバック関数と言う

fn(function(name) {
  console.log('hello ' + name);
})

setTimeout(hello, 2000);