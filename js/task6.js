let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");

button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = Number(inputText.value);

  if (number == NaN || number < 10 || number > Math.pow(2, 32)) {
    textBlock.innerHTML = "Неправельно введены данные.";
    return;
  }
  let tmp = number;
  let invertedNumber = 0;
  do {
    invertedNumber = invertedNumber * 10 + (tmp % 10);
    tmp = Math.floor(tmp / 10);
  } while (tmp);
  textBlock.innerHTML =
    number == invertedNumber ? "Число полиндром" : "Число не полиндром";
}