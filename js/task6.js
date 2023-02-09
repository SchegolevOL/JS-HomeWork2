let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");
let exchangeRate = document.querySelector("#exchangeRate");
button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = Number(inputText.value);

  if (number == NaN || number < 10 || number > Math.pow(2, 32)) {
    textBlock.innerHTML = "Неправельно введены данные.";
    return;
  }
  let changeMany;
  let exchangeRateEUR = 0.93;
  let exchangeRateRUB = 71.58;
  let exchangeRateAZN = 1.7;
  switch (String(exchangeRate.value)) {
    case "EUR":
      changeMany = (number * exchangeRateEUR).toFixed(2);
      textBlock.innerHTML = `${changeMany}`;
      break;
    case "RUB":
      changeMany = (number * exchangeRateRUB).toFixed(2);
      textBlock.innerHTML = `${changeMany}`;
      break;
    case "AZN":
      changeMany = (number * exchangeRateAZN).toFixed(2);
      textBlock.innerHTML = `${changeMany}`;
      break;
    default:
      break;
  }
}
