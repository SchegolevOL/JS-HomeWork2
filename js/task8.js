let button = document.querySelector("#button");
let inputText1 = document.querySelector("#input-text");
let inputText2 = document.querySelector("#input-text2");

let textBlock = document.querySelector("#text-block");

button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let perimetr = Number(inputText1.value);
  let lengthOfCircle = Number(inputText2.value);
  console.log(perimetr);
  console.log(lengthOfCircle);
  if (
    perimetr == NaN ||
    lengthOfCircle <= 0 ||
    lengthOfCircle > Math.pow(2, 32)
  ) {
    textBlock.innerHTML = "Неправельно введена длинна окружности";
    return;
  }
  if (
    lengthOfCircle == NaN ||
    lengthOfCircle <= 0 ||
    lengthOfCircle > Math.pow(2, 32)
  ) {
    textBlock.innerHTML = "Неправельно введены периметр";
    return;
  }
  textBlock.innerHTML =
    perimetr / 4 >= lengthOfCircle / Math.PI
      ? "Окружность поместиться в указанный квадрат"
      : "Окружность не поместиться в указанный квадрат";
}
