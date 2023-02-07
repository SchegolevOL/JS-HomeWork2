let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");
button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = Number(inputText.value);

  if (number == NaN || (number < 100 && number > 1000)) {
    textBlock.innerHTML = "Неправельно введены данные.";
    return;
  }
  let numberBit1 = number % 10;
  number = Math.floor(number / 10);
  let numberBit2 = number % 10;
  let numberBit3 = Math.floor(number / 10);
  if (
    numberBit1 == numberBit2 ||
    numberBit2 == numberBit3 ||
    numberBit1 == numberBit3
  ) {
    textBlock.innerHTML = "Одинаковые разряды есть";
  } else {
    textBlock.innerHTML = "Одинаковых разрядов нет";
  }
}
