let button = document.querySelector("#button");
let inputText = document.querySelector("#input-text");
let textBlock = document.querySelector("#text-block");

button.addEventListener("click", ButtonClick);

function ButtonClick() {
  let number = String(inputText.value);
  let data = number.split("/");
    /*if(data[0]==NaN){
    console.log("Неправельно введены данные.")
    textBlock.innerHTML = "Неправельно введены данные."
  }
  */

  for (let index = 0; index < data.length; index++) {
    data[index] = parseInt(data[index]);
  }
  /*for (let i = 0; i < data.length; i++) {
    if(data[i]==NaN){
      textBlock.innerHTML = "Неправельно введены данные."
    }
  }*/
  if ((data[1] % 2 != 0 && data[1] <= 7) || 
      (data[1] % 2 == 0 && data[1] > 7)) {
    if (data[0] < 31) {
      textBlock.innerHTML = `${data[0] + 1} / ${data[1]} / ${data[2]}`;
      return;
    } else if (data[1] != 12) {
      textBlock.innerHTML = `${1} / ${data[1] + 1} / ${data[2]}`;
      return;
    } else {
      textBlock.innerHTML = `${1} / ${1} / ${data[2] + 1}`;
      return;
    }
  }
  if (data[1] != 2 && data[0] < 30) {
    textBlock.innerHTML = `${data[0] + 1} / ${data[1]} / ${data[2]}`;
    return;
  } else if (
    (getBoolLeapYear(data[2]) && data[0] < 29) ||
    (!getBoolLeapYear(data[2]) && data[0] < 28)
  ) {    
      textBlock.innerHTML = `${data[0] + 1} / ${data[1]} / ${data[2]}`;
      return;
    }else {
      textBlock.innerHTML = `${1} / ${data[1] + 1} / ${data[2]}`;
    }
}

function getBoolLeapYear(number) {
  return number % 400 == 0 || (number % 4 == 0 && number % 100 != 0)
    ? true
    : false;
}
