// const a = 1;
const a = 1;
const b = 0;
const c = 3;
const d = 0;

console.log(a && b && c); // 0
// AND条件はfalthyな値が途中にあればその値を返す。
// なかった場合は一番最後の値を返す。

console.log(a || b || c); // 0
// OR条件はtruthyな値が途中にあればその値を変えす。
// なかった場合は一番最後の値を返す。

// AND条件とOR条件を混在させたいときはグループ化を使う。
console.log((a || b) && c);

console.log((a || b) && (c || d));