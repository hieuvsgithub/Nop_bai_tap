/**
 * * đầu vào là nhập số km bạn đi
 * * đầu ra là tổng số tiền thanh toán cho số km bạn đi
 */

//--------------------- cách 1: hàm có tên ---------------------------------
// đầu vào
// const distance = prompt("nhập vào quãng đường bạn muốn đi (km) :");
// hàm tính tiền thanh toán taxi
// function expense(number) {
//   let total;
//   if (number <= 1 && number > 0) {
//     alert(`Tổng tiền của bạn hết: 15.000 đ`);
//   } else if (number > 1 && number <= 5) {
//     total = number * 13500;
//     alert(`Tổng tiền của bạn hết: ${total}`);
//   } else if (number > 5 && number <= 120) {
//     total = number * 11000;
//     alert(`Tổng tiền của bạn hết: ${total}`);
//   } else if (number > 120) {
//     total = number * 11000 - (number * 11000) / 10;
//     alert(`Tổng tiền của bạn hết: ${total}`);
//   } else {
//     alert("quãng đường bạn nhập vào không hợp lệ");
//   }
// }

// expense(distance);

//--------------------- cách 2: hàm nặc danh ---------------------------------
const distance = prompt("nhập vào quãng đường bạn muốn đi (km) :");

const expense = function (number) {
  let total;
  if (number <= 1 && number > 0) {
    alert(`Tổng tiền của bạn hết: 15.000 đ`);
  } else if (number > 1 && number <= 5) {
    total = number * 13500;
    alert(`Tổng tiền của bạn hết: ${total}`);
  } else if (number > 5 && number <= 120) {
    total = number * 11000;
    alert(`Tổng tiền của bạn hết: ${total}`);
  } else if (number > 120) {
    total = number * 11000 - (number * 11000) / 10;
    alert(`Tổng tiền của bạn hết: ${total}`);
  } else {
    alert("quãng đường bạn nhập vào không hợp lệ");
  }
  return number;
};

const taxi = expense(distance);
console.log(`Quãng đường khách đi là: ${taxi}`);
