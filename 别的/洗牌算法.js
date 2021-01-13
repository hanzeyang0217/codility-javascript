//随机排序
//结论确实洗牌算法精确些
//https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E2%80%93%E3%82%A4%E3%82%A7%E3%83%BC%E3%83%84%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%83%E3%83%95%E3%83%AB

Array.prototype.shuffle = function () {
  let m = this.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]];
  }
  return this;
};
// Array.prototype.shuffle = function () {
//   for (let i = 0; i < this.length; i++) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [this[i], this[random]] = [this[random], this[i]];
//   }
//   return this;
// };

//做数据
const arr = ["A", "B", "C", "D", "E", "F"];
//跑10万次
//记录A出现在 位置1位置2位置3分别几次
//记录B出现在 位置1位置2位置3分别几次
//记录C出现在 位置1位置2位置3分别几次
let A = [0, 0, 0, 0, 0, 0];
let B = [0, 0, 0, 0, 0, 0];
let C = [0, 0, 0, 0, 0, 0];
let D = [0, 0, 0, 0, 0, 0];
let E = [0, 0, 0, 0, 0, 0];
let F = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 100000; i++) {
  // arr.sort(function () {
  //   return 0.5 - Math.random();
  // }); //=>NG
  arr.shuffle();
  A[arr.indexOf("A")]++;
  B[arr.indexOf("B")]++;
  C[arr.indexOf("C")]++;
  D[arr.indexOf("D")]++;
  E[arr.indexOf("E")]++;
  F[arr.indexOf("F")]++;
}
console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);
console.log(F);
