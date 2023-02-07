let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");
button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let age = Number(inputText.value);
  if (age > 0 && age < 12) {
    textBlock.innerHTML = "Ребенок";
    return;
  }
  if (age >= 12 && age < 18) {
    textBlock.innerHTML = "Подросток";
    return;
  }
  if (age >= 18 && age < 60) {
    textBlock.innerHTML = "Взрослый";
    return;
  }
  if (age >= 60 && age < 150) {
    textBlock.innerHTML = "Пенсионер";
    return;
  }else {
    textBlock.innerHTML = "Неправельный ввод данных";
  }
}
