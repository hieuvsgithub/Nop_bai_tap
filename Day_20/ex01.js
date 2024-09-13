let text =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus delectus facilis saepe nostrum ab ratione at doloremque reiciendis corrupti magni.";

let index = 0;

function highlight() {
  let b = text.split(" ");
  let element;
  let highlightA = "";

  for (let i = 0; i < b.length; i++) {
    element = b[i] + " ";
    if (i === index) {
      highlightA += `<span>${element}</span>`;
    } else {
      highlightA += element;
    }
  }

  index++;

  document.querySelector(".title").innerHTML = highlightA;

  if (index === b.length) {
    index = 0;
  }
}
setInterval(highlight, 1000);
