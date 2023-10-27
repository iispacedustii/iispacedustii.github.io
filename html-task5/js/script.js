
/*
let toCalculate = () => {
    let weight = document.getElementById("weight").value;
    let item = document.getElementById("item").value;
  
    if(!Number(weight.value) || Number(weight.value) <= 0)
      return "Стоимость: " + String(Number[item] * Number(weight));
    else
      return "Некорректно введен вес";
  
    let domAns = document.getElementById("result");
    domAns.replaceChildren(`${value}`);
};*/

function toCalculate {
    let weight = document.getElementById("weight");
    let item = document.getElementById("item");

    let domAns = document.getElementById("result");
    if(!Number(weight.value) || Number(weight) <= 0)
      result.innerText = "Стоимость = " + String(Number(item) * Number(weight));
    else
      result.innerText = "Некорректно введен вес";
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let buttonA = document.getElementById("calculate");
    buttonA.addEventListener("click", toCalculate);
});
