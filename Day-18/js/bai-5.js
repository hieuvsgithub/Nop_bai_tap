let a = 11;
let b = 6;
let c = 21;

if (a < b && b < c) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${a} ${b} ${c}`);
} else if (a < b && b > c && a < c) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${a} ${c} ${b}`);
} else if (b < a && a < c) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${b} ${a} ${c}`);
} else if (b < a && a > c && b < c) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${b} ${c} ${a}`);
} else if (c < a && a < b) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${c} ${a} ${b}`);
} else if (c < a && a > b && c < b) {
  console.log(`Ba số cho trước có thứ tự tăng dần là `);
  console.log(`${c} ${b} ${a}`);
} else {
  console.log(`ba số cho trước là 3 số bằng nhau`);
}
