// 戻り値がオブジェクトの場合
function F1(a,b) {
  this.a = a;
  this.b = b;
  return {};
}

const instance1 = new F1(1, 2);
// returnの値がconsole.logで表示される
console.log(instance1);

// 戻り値がオブジェクト以外場合
function F2(a,b) {
  this.a = a;
  this.b = b;
  return 1;
}

F2.prototype.c =function() {}

const instance2 = new F2(1, 2);
// protypeがコピーされ__prot__が表示される
console.log(instance2);


function F3(a,b) {
  this.a = a;
  this.b = b;
  return {a: 1};
}

F3.prototype.c =function() {}

function newOpe(C, ...args) {
  const _this = Object.create(C.prototype);
  const result = C.apply(_this, args);
  // console.log(result, _this);
  console.log(typeof result);
  if(typeof result === "object" && result !== null) {
    return result;
  }

  return _this
}

const instance3 = newOpe(F3, 1, 2);
console.log(instance3);

