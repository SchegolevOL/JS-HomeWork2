let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");
button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = Number(inputText.value);

  if (number == NaN || number < 1) {
    textBlock.innerHTML = "Неправельно введены данные.";
    return;
  }
  textBlock.innerHTML =
    number % 400 == 0 || (number % 4 == 0 && number % 100 != 0)
      ? "Год високосный"
      : "Год не високосный";
}
