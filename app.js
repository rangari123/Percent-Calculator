// variables
let num1 = document.getElementById("num");
let num2 = document.getElementById("num2");
let formSubmit = document.getElementById("form-submit");
const btn = document.querySelector(".btn");
const main = document.querySelector("main");
let heading = document.querySelector("header");

// let res = document.querySelector(".result");
// let x = parseFloat(num1.value);
// let y = parseFloat(num2.value);

btn.addEventListener("click", claculate);

function claculate() {
  //(Part / Whole) * 100
  let x = parseFloat(num1.value);
  let y = parseFloat(num2.value);

  let precentCalc = (x / y) * 100;
  console.log(precentCalc);

  if (num1.value === "" && num2.value === "") {
    showErorr();
  } else {
    let calcElement = document.querySelector(".calc");
    if (calcElement) {
      calcElement.remove();
    }
    let calcDiv = document.createElement("div");
    calcDiv.className = "calc";
    calcDiv.appendChild(document.createTextNode(precentCalc + "%"));
    formSubmit.appendChild(calcDiv);
  }
}

// Showing error at top
function showErorr() {
  let errorDiv = document.createElement("div");
  errorDiv.className = "alert";
  errorDiv.appendChild(document.createTextNode("Enter Some value!"));
  main.insertBefore(errorDiv, heading);
  setTimeout(clearError, 1000); // show error after 2sec
}
function clearError() {
  document.querySelector(".alert").remove();
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", clearval);

function clearval() {
  num1.value = "";
  num2.value = "";
  let calcElement = document.querySelector(".calc");
  // if clacelemt exist then only remove
  if (calcElement) {
    calcElement.remove();
  }
}
