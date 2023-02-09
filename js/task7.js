let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");

button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = parseInt(inputText.value);
  let discount = 0;
  if (number == NaN || number < 10 || number > Math.pow(2, 32)) {
    textBlock.innerHTML = "Неправельно введены данные.";
    return;
  }
  if (number >= 300 && number < 300) {
    discount = 3;
  }
  if (number >= 300 && number < 500) {
    discount = 5;
  }
  if (number >= 500) {
    discount = 7;
  }
  textBlock.innerHTML = `Сумма к оплате ${
    number - (number / 100) * discount
  }, скидка составила ${discount}%`;
}
