/**
 * * đầu vào là số điện của tháng
 * * đầu ra là tổng số tiền phải đóng
 */

// đầu vào
const numberElectricity = prompt("Số điện (kWh) tháng này của bạn là :");

// thử dùng hàm callback
// hàm logic chi phí tiền điện
function expense(number, callback) {
  let total;
  if (number > 0 && number <= 50) {
    total = number * 1.678;
    callback(total);
  } else if (number > 50 && number <= 100) {
    number -= 50;
    total = 50 * 1.678 + number * 1.734;
    callback(total);
  } else if (number > 100 && number <= 200) {
    number -= 100;
    total = 50 * 1.678 + 50 * 1.734 + number * 2.014;
    callback(total);
  } else if (number > 200 && number <= 300) {
    number -= 200;
    total = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + number * 2.536;
    callback(total);
  } else if (number > 300 && number <= 400) {
    number -= 300;
    total =
      50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + number * 2.834;
    callback(total);
  } else if (number > 400) {
    number -= 400;
    total =
      50 * 1.678 +
      50 * 1.734 +
      100 * 2.014 +
      100 * 2.536 +
      100 * 2.834 +
      number * 2.927;
    callback(total);
  } else {
    total = number;
    callback(total);
  }
}
// hiện lên cửa sổ sonsole số điện hằng tháng của khách
console.log(`số điện tháng này của user là : ${numberElectricity} (kWh)`);
// hàm trả về hết quả của hàm logic chi phí tiền điện
const displayResult = function (value) {
  value = Math.round(value);
  if (value > 0) {
    alert(`Tổng tiền điện tháng này của bạn là: ${value} nghìn`);
    // hiện lên cửa sổ console tổng tiền điện tháng
    console.log(`Tổng tiền điện tháng này của user là: ${value} nghìn`);
  } else {
    alert(`Số điện bạn nhập vào không hợp lệ`);
    // hiện lên cửa sổ console user nhập số điện không hợp lệ
    console.warn(`Số điện user nhập vào không hợp lệ`);
  }
};
// gọi hàm logic chi phí tiền điện
expense(numberElectricity, displayResult);
