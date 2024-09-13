const distance = +prompt("Nhập số km:");
let pricePerKm,
  discount = 10,
  total;
if (typeof distance === "number" && !Number.isNaN(distance) && distance > 0) {
  if (distance <= 1) {
    pricePerKm = 15000;
    total = distance * pricePerKm;
    alert(
      `Với quãng đường ${distance} (km) \n Số tiền bạn phải trả là ${total}`
    );
  } else if (distance <= 5) {
    pricePerKm = 13500;
    total = 15000 + (distance - 1) * pricePerKm;
    alert(
      `Với quãng đường ${distance} (km) \n Số tiền bạn phải trả là ${total}`
    );
  } else if (distance) {
    pricePerKm = 11000;
    total = 15000 + 13500 * 4 + (distance - 5) * pricePerKm;

    if (distance > 120) {
      total = (total * (100 - discount)) / 100;
    }
    alert(
      `Với quãng đường ${distance} (km) \n Số tiền bạn phải trả là ${total}`
    );
  }
  console.log(`Số tiền ứng ${distance}km là ${total} vnd`);
} else {
  console.log(`Nhap lai khoang cach dạng số và > 0`);
}
