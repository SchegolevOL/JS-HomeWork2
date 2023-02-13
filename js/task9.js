let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

let inputTest1 = document.querySelector("#myForm1-answer1");
let inputTest2 = document.querySelector("#myForm2");
let inputTest3 = document.querySelector("#myForm3");

button1.addEventListener("click", ButtonClick1);

function ButtonClick1() {
  if (inputTest1.children == "checked") {
    console.log("ggggg")
  }
}