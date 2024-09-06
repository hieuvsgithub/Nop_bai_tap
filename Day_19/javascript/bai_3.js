/**
 *
 */

let n = prompt("Nhập n :");
// hàm
function sumMultiply(number) {
  let S = 0;
  if (number == Number(number)) {
    if (number >= 0) {
      for (let i = 1; i <= n; i++) {
        S += i * (i + 1);
      }
      alert(
        `Giá trị của biểu thức \n S= 1*2 + 2*3 + 3*4 + ... + n*(n+1) khi n = ${number} là: ${S}`
      );
    } else {
      for (let i = -1; i >= n; i--) {
        S += i * (i - 1);
      }
      alert(
        `Giá trị của biểu thức \n S= 1*2 + 2*3 + 3*4 + ... + n*(n+1) khi n = ${number} là: ${S}`
      );
    }
  } else {
    alert(`không hợp lệ`);
  }
  return S;
}
const total = sumMultiply(n);
console.log(
  `Giá trị của biểu thức \n S= 1*2 + 2*3 + 3*4 + ... + n*(n+1) khi n = ${n} là: ${total}`
);
