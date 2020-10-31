let a = 0;
console.log(Boolean(a)); //false

a = "";
console.log(Boolean(a)); //false

a = 0n;
console.log(Boolean(a)); //false

a = null;
console.log(Boolean(a)); //false

a = undefined;
console.log(Boolean(a)); //false

a = NaN; //Not a Numberの略
console.log(Boolean(a)); //false
console.log(a); //NaN

// parseInt("")とした時に空文字はparseIntで表せない(Not a Number
// )となる

// faltyな値はfalse以外の時を参照したい時使う

if(a) {
  console.log('hello');
} else {
  console.log('bye');
}
// aはfalthyなのでelse側が表示される

if(!a) {
  console.log('hello');
} else {
  console.log('bye');
}
// !をつけるとfalthyをtruthyに変える