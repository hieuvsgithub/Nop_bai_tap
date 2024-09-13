/**
 * số nguyên tố là số chia hết cho 1 và chính nó
 *
 * Hàm có giá trị trả về
 * Gọi hàm trong câu điều kiện if else
 */

const n = prompt("Mời bạn nhập 1 số bất kì:");

function primeNumberTest(number) {
  // let check;
  if (number == 2) {
    alert(`Số 2 là số nguyên tố`);
  } else if (number > 2) {
    for (let i = 2; i < number; i++) {
      // check = number % i;
      if (number % i == 0) {
        alert(`Số ${number} không là số nguyên tố`);
        return;
      }
    }
    alert(`Số ${number} là số nguyên tố`);
  } else {
    alert("Không hợp lệ");
  }
  // return number;
}

if (n < 2) {
  alert(`${n} không phải số nguyên tố`);
} else {
  primeNumberTest(n);
}
