function toCalculate() {
    let weight = document.getElementById("weight");
    let item = document.getElementById("item");

    let domAns = document.getElementById("result");
    if(Number(weight.value) && weight.value > 0)
      result.innerHTML = "Стоимость: " + String(Number(item[0].value) * Number(weight[0].value));
    else
      result.innerHTML = "Некорректно введен вес";
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    let buttonA = document.getElementById("calculate");
    buttonA.addEventListener("click", toCalculate);
});
