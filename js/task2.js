let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");
button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = Number(inputText.value);
  switch (number) {
    case 1:
        textBlock.innerHTML = "!";
      break;
    case 2:
        textBlock.innerHTML = "@";
      break;      
    case 3:
        textBlock.innerHTML = "#";
      break;
    case 4:
        textBlock.innerHTML = "$";
      break;
    case 5:
        textBlock.innerHTML = "%";
      break;
    case 6:
        textBlock.innerHTML = "^";
      break;
    case 7:
        textBlock.innerHTML = "&";
      break;
    case 8:
        textBlock.innerHTML = "*";
      break;
    case 9:
        textBlock.innerHTML = "(";
      break;
    case 0:
        textBlock.innerHTML = ")";
      break;

    default:
        textBlock.innerHTML = "Неправельный ввод данных";
      break;
    
  }
}
