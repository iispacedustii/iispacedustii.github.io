function toCalculate5() {
    let weight = document.getElementById("weight");
    let item = document.getElementById("item");
    let domAns = document.getElementById("result5");
    
    if(Number(weight.value) && weight.value > 0)
      result.innerHTML = "Стоимость: " + String(Number(item.value) * Number(weight.value));
    else
      result.innerHTML = "Некорректно введен вес";
    
    console.log(result);
    return false;
};
