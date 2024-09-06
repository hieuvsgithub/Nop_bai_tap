/**
 * vẽ bảng cửu chương tuqf 1 tới 10
 *
 */
function multiplicationTables() {}
let z;
for (let x = 1; x <= 10; x++) {
  console.log(`bảng cửu chương ${x}:`);
  for (let y = 1; y <= 10; y++) {
    z = x * y;
    console.log(`${x} x ${y} = ${z}`);
  }
  console.log(`\n`);
}
