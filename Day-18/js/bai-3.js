let a = 11;
let b = 6;
let c = 21;

if (a > b && a > c) {
  console.log(`a = ${a} là số lớn nhất `);
} else if (b > a && b > c) {
  console.log(`b = ${b} là số lớn nhất `);
} else if (c > b && c > a) {
  console.log(`c = ${c} là số lớn nhất `);
} else if ((a == b) == c) {
  console.log(`ba số bằng nhau`);
} else if (a == b && a > c) {
  console.log(`a = b lớn hơn c`);
} else if (c == b && c > a) {
  console.log(`b = c lớn hơn a`);
} else if (a == c && c > b) {
  console.log(`a = c lớn hơn b`);
}
