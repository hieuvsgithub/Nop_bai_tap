let a = 11;
let b = 6;

if (a * b > 0) {
  console.log(`a = ${a} và b = ${b} là hai số cùng dấu`);
} else if (a * b == 0 && a == 0) {
  console.log(`a có giá trị bằng 0`);
} else if (a * b == 0 && b == 0) {
  console.log(`b có giá trị bằng 0`);
} else {
  console.log(`a = ${a} và b = ${b} là hai số trái dấu`);
}
